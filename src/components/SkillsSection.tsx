interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Security",
    skills: ["OWASP Top 10", "Network Security", "Penetration Testing", "IAM", "Encryption (AES/RSA)", "TCP/IP", "DNS", "VPN", "Firewalls", "IDS/IPS"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "AWS Security Hub", "Amazon GuardDuty", "Azure", "Microsoft Defender for Cloud", "GCP", "Security Command Center", "Chronicle", "Docker", "Kubernetes", "Terraform", "GitHub", "YAML"],
  },
  {
    name: "Languages",
    skills: ["Python (Automation/Scripting)", "Java", "C++", "Bash", "SQL", "JavaScript", "F#", "Go", "R", "PHP"],
  },
  {
    name: "Tools",
    skills: ["Tenable Nessus", "Splunk", "Wireshark", "Burp Suite", "Metasploit", "Git", "Jenkins", "Microsoft Power Automate"],
  },
  {
    name: "Web Development",
    skills: ["React", "Node.js", "Express.js", "HTML", "CSS", "Flask", "REST APIs", "WebSocket APIs"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MariaDB", "SQLite3", "Mongoose"],
  },
  {
    name: "Data Science & AI",
    skills: ["NumPy", "TensorFlow", "Airflow", "Power BI", "NLP", "TF-IDF", "Agentic AI Workflows", "AI/LLM Behavior"],
  },
  {
    name: "Operating Systems",
    skills: ["Linux (Ubuntu/Kali)", "Windows Server", "macOS"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <h2 className="section-heading">Skills</h2>
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <h3 className="mb-3 text-sm font-semibold text-foreground">{category.name}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill} className="tech-badge">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
