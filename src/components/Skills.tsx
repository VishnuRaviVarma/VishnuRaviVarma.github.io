import { Cloud, Code, Container, Lock, Terminal, Wrench } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Platforms',
      skills: ['Azure', 'AWS', 'GCP'],
    },
    {
      icon: <Container className="w-6 h-6" />,
      title: 'DevOps & Tools',
      skills: ['Docker', 'Kubernetes', 'Git', 'PowerShell'],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Programming Languages',
      skills: ['Golang', 'Python', 'C++/C#'],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Other Technologies',
      skills: ['PowerApps', 'Windows', 'Cloud Computing'],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Security & Infrastructure',
      skills: ['Cyber Security', 'Network Infrastructure', 'System Administration'],
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: 'Automation & Scripting',
      skills: ['CI/CD Pipelines', 'Infrastructure as Code', 'Process Automation'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover-lift hover:border-primary transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-muted rounded-full text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
