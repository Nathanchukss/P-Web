import { ArrowUpRight } from "lucide-react";

interface Experience {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    period: "2024 — Present",
    title: "Frontend Developer",
    company: "Tech Company",
    companyUrl: "https://example.com",
    description:
      "Build and maintain critical components used to construct the company's frontend, working closely with cross-functional teams including developers, designers, and product managers to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    period: "2023 — 2024",
    title: "Junior Developer",
    company: "Startup Inc",
    companyUrl: "https://example.com",
    description:
      "Developed and shipped highly interactive web applications for various clients. Worked on improving performance and accessibility across the platform while learning industry best practices.",
    technologies: ["React", "Node.js", "PostgreSQL", "Git"],
  },
  {
    period: "2022 — 2023",
    title: "Web Development Intern",
    company: "Digital Agency",
    companyUrl: "https://example.com",
    description:
      "Collaborated with a team of developers to build responsive websites and web applications. Gained hands-on experience with modern web technologies and agile development methodologies.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
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
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <li key={tech} className="tech-badge">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
