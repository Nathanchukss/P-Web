import { ArrowUpRight } from "lucide-react";

interface Experience {
  period: string;
  title: string;
  company: string;
  location?: string;
  companyUrl?: string;
  description: string[];
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    period: "Sep 2025 — Dec 2025",
    title: "Cyber Security Intern / IT Assistant",
    company: "Georgia State University",
    location: "Atlanta, GA",
    description: [
      "Assisted in a campus-wide audit of 50+ network access points, identifying and remediating 5 critical misconfigurations.",
      "Monitored network traffic using Wireshark and Splunk to identify anomalous patterns, contributing to the early detection of a localized malware infection.",
      "Developed a \"Secure Coding\" workshop for 30+ peer students to promote the use of sanitized inputs.",
    ],
    technologies: ["Network Security", "Wireshark", "Splunk", "Computer Science"],
  },
  {
    period: "May 2025 — Aug 2025",
    title: "Cybersecurity Intern",
    company: "Zircon Business Solutions Limited",
    location: "Atlanta, GA",
    description: [
      "Conducted vulnerability scans using Tenable Nessus and helped with risk prioritization.",
      "Reviewed past incident tickets to identify recurring security issues.",
      "Assisted with SOAR-based reporting automation.",
    ],
    technologies: ["Tenable Nessus", "Security Policy", "SOAR", "Analytical Skills"],
  },
  {
    period: "Mar 2024 — Present",
    title: "Retail Associate II",
    company: "The Coca-Cola Company",
    location: "Atlanta, GA",
    description: [
      "Delivered excellent guest service, increasing customer satisfaction scores by 15%.",
      "Promote Coca-Cola products to an average of 200+ customers daily, enhancing brand visibility.",
      "Collaborated with team members to exceed sales targets by 20% through promotional strategies.",
    ],
  },
  {
    period: "May 2023 — Sep 2025",
    title: "AI Prompter",
    company: "Upwork",
    companyUrl: "https://www.upwork.com",
    location: "Remote",
    description: [
      "Designed and optimized 500+ AI prompts to improve accuracy, efficiency and reliability of outputs.",
      "Increased model performance consistency by 30% through iterative testing and refinement.",
      "Conducted prompt A/B testing with success rates improving task accuracy from 69% to 90%.",
    ],
    technologies: ["AI/LLM", "Prompt Engineering", "A/B Testing", "Problem Solving"],
  },
  {
    period: "Sep 2023 — Jan 2024",
    title: "Customer Service Staff",
    company: "Publix Super Markets",
    location: "Atlanta, GA",
    description: [
      "Guided customers through various money transfer services, ensuring a seamless and positive experience.",
      "Reduced fraud incidents by 15% through fraud education and specialized training.",
      "Contributed to a safer environment and customer trust through vigilant fraud prevention.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <h2 className="section-heading">Experience</h2>
      <div className="group/list">
        {experiences.map((exp, index) => (
          <div key={index} className="group experience-card mb-12 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:before:bg-muted/50">
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
              {exp.period}
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug">
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link external-link"
                  >
                    <span>
                      {exp.title} · {exp.company}
                    </span>
                    <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="text-foreground">
                    {exp.title} · {exp.company}
                  </span>
                )}
              </h3>
              {exp.location && (
                <p className="mt-1 text-xs text-muted-foreground">{exp.location}</p>
              )}
              <ul className="mt-2 space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
              {exp.technologies && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <li key={tech} className="tech-badge">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
