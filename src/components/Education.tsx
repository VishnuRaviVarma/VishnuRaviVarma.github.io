import { GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: 'Dual MSc. Cloud and Network Infrastructure',
      institution: 'Aalto University & KTH',
      period: '2024 - 2026',
      description: 'Specialized dual degree program focusing on cloud computing and network infrastructure.',
    },
    {
      degree: 'BSc in Computer Science and Technology',
      institution: 'Beijing Institute of Technology',
      period: '2018 - 2022',
      description: 'Foundation in computer science with emphasis on software development and systems.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          Education
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover-lift"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
