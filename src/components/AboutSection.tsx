const AboutSection = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <h2 className="section-heading">About</h2>
      <div className="space-y-4 text-muted-foreground">
        <p>
          I'm a developer passionate about crafting accessible, pixel-perfect user
          interfaces that blend thoughtful design with robust engineering. My favorite
          work lies at the intersection of design and development, creating experiences
          that not only look great but are meticulously built for performance and usability.
        </p>
        <p>
          Currently, I'm focused on building innovative digital products and learning
          new technologies. I contribute to projects that prioritize{" "}
          <span className="text-highlight">accessibility</span> and{" "}
          <span className="text-highlight">user experience</span>, ensuring that what
          I build meets web standards and best practices.
        </p>
        <p>
          In the past, I've had the opportunity to develop software across a variety of
          settings — from <span className="text-highlight">personal projects</span> and{" "}
          <span className="text-highlight">academic work</span> to{" "}
          <span className="text-highlight">collaborative team environments</span>.
          I'm always eager to tackle new challenges and expand my skill set.
        </p>
        <p>
          In my spare time, I'm usually exploring new technologies, reading about software
          architecture, or working on side projects that push my boundaries as a developer.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
