interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "JavaScript", "C++/C", "Java", "SQL", "F#", "Go", "R", "Assembly", "PHP"],
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
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "GitHub", "YAML", "Microsoft Power Automate"],
  },
  {
    name: "Data Science & AI",
    skills: ["NumPy", "TensorFlow", "Airflow", "Power BI", "NLP", "TF-IDF", "Agentic AI Workflows", "AI/LLM Behavior", "Linear & Logistic Regression", "Support Vector Models"],
  },
  {
    name: "Networking & Security",
    skills: ["Wireshark", "TCP/IP", "DNS", "HTTP", "DHCP", "VPN", "Firewalls", "IDS/IPS"],
  },
  {
    name: "Other Tools",
    skills: ["JavaFX", "FXML", "Canvas"],
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
