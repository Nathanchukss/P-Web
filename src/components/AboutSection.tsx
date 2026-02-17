const AboutSection = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <h2 className="section-heading">About</h2>
      <div className="space-y-4 text-muted-foreground">
        <p>
        I'm a <span className="text-highlight">Graduate Honors Student</span> at{" "}
          <a 
            href="https://www.gsu.edu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-highlight hover:underline"
          >
            Georgia State University
          </a> with a B.S. in
          Computer Science. I've been recognized on
          the <span className="text-highlight">President's List 6 times</span> and{" "}
          <span className="text-highlight">Dean's List 4 times</span> for academic excellence.
        </p>
        <p>
          My interests span across{" "}
          <span className="text-highlight">Software Engineering</span>,{" "}
          <span className="text-highlight">Security Engineering</span>,{" "}
          <span className="text-highlight">Cloud Solutions Architecture</span>,{" "}
          <span className="text-highlight">SOC Analysis</span>, and{" "}
          <span className="text-highlight">Incident Response</span>. With a strong foundation in{" "}
          software development and full-stack engineering, I enjoy building secure, scalable
          applications while thinking critically about threat detection, security
          architecture, and defensive strategies.
        </p>
        <p>
          I have hands-on experience building full-stack applications with React, Node.js, Python,
          and PostgreSQL, as well as working with security tools including Tenable Nessus,
          Splunk, Wireshark, Burp Suite, and Metasploit. I've applied software engineering
          best practices to projects spanning vulnerability assessments, security automation,
          CI/CD pipelines, and cloud infrastructure.
        </p>
        <p>
          As a{" "}
          <span className="text-highlight">CompTIA Security+</span> and{" "}
          <a 
            href="https://aws.amazon.com/certification/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-highlight hover:underline"
          >
            AWS Certified Cloud Practitioner
          </a>, I bring
          security and cloud expertise to my projects. When I'm not coding, I'm advancing my
          development skills, exploring agentic AI workflows, refining prompt engineering
          techniques, and understanding how leading technologies can transform traditional
          business processes.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
