<#
PowerShell deploy script for GitHub Pages (manual gh-pages push)

Usage examples:
  # Quick deploy (build only)
  .\scripts\deploy.ps1

  # Install dependencies then deploy
  .\scripts\deploy.ps1 -InstallDeps

  # Deploy to a different branch
  .\scripts\deploy.ps1 -Branch "test/gh-pages"

What it does:
- Optionally runs `npm ci`
- Runs `npm run build`
- Copies `dist/index.html` to `dist/404.html` for SPA fallback
- Creates an orphan branch (default `gh-pages`), commits the contents of `dist/` and force-pushes the branch
- Restores your previous branch

Note: Run this from the repository root. The script will delete the local deploy branch if it exists to create a clean orphan branch.
#>
[CmdletBinding()]
param(
    [string]$Branch = "gh-pages",
    [string]$BuildCommand = "npm run build",
    [switch]$InstallDeps
)

function Exit-OnError($Message) {
    Write-Error $Message
    exit 1
}

# Ensure we're in repo root
$repoRoot = (Get-Location).Path
Write-Host "Repository root: $repoRoot"

if ($InstallDeps) {
    Write-Host "Installing dependencies (npm ci)..."
    npm ci
    if ($LASTEXITCODE -ne 0) { Exit-OnError "npm ci failed" }
}

Write-Host "Running build: $BuildCommand"
# Use call operator to run the build command
& npm run build
if ($LASTEXITCODE -ne 0) { Exit-OnError "Build failed" }

$dist = Join-Path $repoRoot 'dist'
if (-not (Test-Path $dist)) { Exit-OnError "Build output folder 'dist' not found" }

# SPA fallback: copy index.html to 404.html
$index = Join-Path $dist 'index.html'
$notFound = Join-Path $dist '404.html'
if (-not (Test-Path $index)) { Exit-OnError "$index not found" }
Copy-Item -Path $index -Destination $notFound -Force

# Save current branch
$curBranch = git rev-parse --abbrev-ref HEAD 2>$null
if ($LASTEXITCODE -ne 0) { Exit-OnError "Unable to detect current git branch" }
Write-Host "Current branch: $curBranch"

# Delete local deploy branch if exists (safe: only local removal)
$branchRef = "refs/heads/$Branch"
$exists = $false
try {
    git show-ref --verify --quiet $branchRef; $exists = ($LASTEXITCODE -eq 0)
} catch { $exists = $false }

if ($exists) {
    Write-Host "Local branch '$Branch' exists — deleting local branch to recreate as orphan..."
    git branch -D $Branch
    if ($LASTEXITCODE -ne 0) { Exit-OnError "Failed to delete local branch $Branch" }
}

# Create orphan branch
Write-Host "Creating orphan branch '$Branch'..."
git switch --orphan $Branch
if ($LASTEXITCODE -ne 0) { Exit-OnError "Failed to create orphan branch $Branch" }

# Commit files from dist as the root of the orphan branch
Write-Host "Adding dist content and committing..."
git --work-tree "$dist" add --all
if ($LASTEXITCODE -ne 0) { Exit-OnError "Failed to add files from $dist" }

$commitMessage = "Deploy site: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
# Allow empty commit if nothing changed
try {
    git --work-tree "$dist" commit -m $commitMessage --allow-empty
} catch {
    # commit can return non-zero even when successful in some environments; check last exit code
}

if ($LASTEXITCODE -ne 0) {
    Write-Host "Warning: commit returned non-zero exit code. Continuing to push anyway."
}

Write-Host "Pushing to origin/$Branch (force)..."
git push origin $Branch --force
if ($LASTEXITCODE -ne 0) { Exit-OnError "git push failed" }

# Switch back to original branch
Write-Host "Switching back to branch: $curBranch"
git switch $curBranch
if ($LASTEXITCODE -ne 0) { Write-Host "Warning: failed to switch back to $curBranch — check your git state" }

Write-Host "Deploy complete. Visit https://<your-username>.github.io to view the site (may take a minute to publish)."
