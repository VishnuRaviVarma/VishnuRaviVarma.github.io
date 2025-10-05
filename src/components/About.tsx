const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Beyond the command line, I'm passionate about exploring cutting-edge technologies, 
            contributing to open-source projects, and continuously learning new skills in the 
            ever-evolving tech landscape.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This space is a collection of my professional work and personal explorations—a 
            digital portfolio that showcases my journey in cloud computing, DevOps practices, 
            and software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
