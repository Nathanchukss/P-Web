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
    period: "May 2023 — Aug 2025",
    title: "Freelance Prompt Engineer",
    company: "Upwork",
    companyUrl: "https://www.upwork.com",
    description: [
      "Designed and optimized 500+ AI prompts to improve accuracy, efficiency and reliability of outputs.",
      "Increased model performance consistency by 30% through iterative testing and refinement.",
      "Conducted prompt A/B testing with success rates improving task accuracy from 69% to 90%.",
    ],
    technologies: ["AI/LLM", "Prompt Engineering", "A/B Testing"],
  },
  {
    period: "Jul 2022 — Jan 2024",
    title: "Customer Service Staff & Cashier",
    company: "Publix Super Markets",
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
