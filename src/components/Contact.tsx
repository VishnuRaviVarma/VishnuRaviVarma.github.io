import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently seeking Master's thesis opportunities and always open to discussing 
          new projects, collaborations, or just having a tech chat.
        </p>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card border-border hover-lift">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:vishnuravivarma@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  vishnuravivarma@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover-lift">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a
                  href="tel:+358465502527"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +358 465502527
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover-lift">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/vishnuravivarma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  /in/vishnuravivarma
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover-lift">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">GitHub</h3>
                <a
                  href="https://github.com/vishnuravivarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @vishnuravivarma
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12 text-muted-foreground">
          <p>© 2025 Vishnu Ravi Varma. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
