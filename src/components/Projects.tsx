import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'professional' | 'hobby'>('all');

  const projects = [
    {
      title: 'Azure Storage Backup Solution',
      description:
        'Windows App to automate backup of local files into Azure Storage using C# and Azure SDK.',
      category: 'professional',
      tags: ['Azure', 'PowerShell', 'C#', 'Azure SDK'],
      github: '#',
      demo: '#',
    },
    
    {
      title: 'Personal Cloud Lab',
      description:
        'Home lab environment for testing cloud technologies and experimenting with new tools.',
      category: 'hobby',
      tags: ['Raspberry Pi', 'Docker', 'Kubernetes',''],
    },
    {
      title: 'Simple Data Ingestion Pipeline',
      description:
        'A data ingestion pipeline using Kafka and Cassandra for real-time data processing.',
      category: 'hobby',
      tags: ['Kafka', 'Cassandra', 'Python'],
      github: '#',
    },
    {
      title: 'Scalable Application Deployment Projects',
      description:
        'Collection of projects to explore networking at scale using python , google cloud and terraform',
      category: 'hobby',
      tags: ['Python', 'GCP', 'Terraform' , 'Kubernetes'],
      github: '#',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">
          Projects
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          A showcase of my professional work and personal explorations in cloud computing and DevOps.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All Projects
          </Button>
          <Button
            variant={filter === 'professional' ? 'default' : 'outline'}
            onClick={() => setFilter('professional')}
          >
            Professional Work
          </Button>
          <Button
            variant={filter === 'hobby' ? 'default' : 'outline'}
            onClick={() => setFilter('hobby')}
          >
            Hobby Projects
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover-lift flex flex-col"
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge variant={project.category === 'professional' ? 'default' : 'secondary'}>
                    {project.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
