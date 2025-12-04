const AboutSection = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <h2 className="section-heading">About</h2>
      <div className="space-y-4 text-muted-foreground">
        <p>
          I'm an <span className="text-highlight">Honors Student</span> at{" "}
          <span className="text-highlight">Georgia State University</span> pursuing a B.S. in
          Computer Science with a 3.87 GPA, graduating December 2025. I've been recognized on
          the <span className="text-highlight">President's List 6 times</span> and{" "}
          <span className="text-highlight">Dean's List 3 times</span> for academic excellence.
        </p>
        <p>
          My interests span across{" "}
          <span className="text-highlight">DevOps Engineering</span>,{" "}
          <span className="text-highlight">Cloud Solutions Architecture</span>,{" "}
          <span className="text-highlight">AI/ML</span>, and{" "}
          <span className="text-highlight">Security Operations</span>. I enjoy working on
          projects that challenge me to think critically about system design, performance
          optimization, and user experience.
        </p>
        <p>
          I have hands-on experience with a diverse tech stack including Python, JavaScript,
          React, Node.js, AWS, Docker, and various databases. I've worked on everything from
          building custom regex engines and NLP models to deploying cloud-hosted web servers
          and developing full-stack applications.
        </p>
        <p>
          As an{" "}
          <span className="text-highlight">AWS Certified Cloud Practitioner</span>, I bring
          cloud expertise to my projects. When I'm not coding, I'm exploring agentic AI
          workflows, refining prompt engineering techniques, or diving into network security
          concepts.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
