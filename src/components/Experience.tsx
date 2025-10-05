import { Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Team Lead - Cloud Division',
      company: 'Manvish Info Solutions',
      period: 'Mar 2022 - Present',
      achievement:
        'Successfully migrated over 100 clients to Azure, optimizing uptime and scalability.',
    },
    {
      title: 'Cloud Engineer',
      company: 'Manvish Info Solutions',
      period: 'May 2021 - Mar 2022',
      achievement:
        'Developed internal tools and scripts to automate repetitive tasks, improving deployment efficiency.',
    },
    {
      title: 'Data Science Intern',
      company: 'Clustr',
      period: 'Feb 2021 - May 2021',
      achievement:
        'Raised prediction accuracy from ~50% to 90% by leveraging cosine similarity and Jaccard distance.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background -ml-2 md:-ml-2 glow"></div>

                <Card className="p-6 bg-card border-border hover-lift ml-8 md:ml-0 md:w-[calc(50%-2rem)]">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{exp.achievement}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
