import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Regular Expression Engine",
    description:
      "Engineered a custom regular expression engine in Python from scratch, encompassing over 800 lines of code, to parse complex data structures and match intricate search patterns with 99% accuracy.",
    technologies: ["Python", "Algorithms", "Data Structures"],
  },
  {
    title: "FitLaand",
    description:
      "Developed core features of a fitness tracking web application with a full-stack architecture. Built the frontend with React.js, backend with Express.js on Node.js, and integrated MongoDB with Mongoose for data persistence.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
  },
  {
    title: "P15 Puzzle",
    description:
      "Developed a web-based Fifteen Puzzle game with dynamic tile movement, live time/move tracking, secure user authentication, customizable game preferences, and an admin dashboard.",
    technologies: ["JavaScript", "HTML", "CSS", "Authentication"],
  },
  {
    title: "Streamline",
    description:
      "Conceptualized and built a sales platform for musical collections as a group project. Delivered a presentation to clients, receiving the highest rating for clarity and technical detail.",
    technologies: ["Project Management", "Full-Stack Development"],
  },
  {
    title: "NetTraff - Network Traffic Analysis",
    description:
      "Captured and analyzed packet data to identify network patterns, troubleshoot connectivity issues, and evaluate protocol performance using Wireshark.",
    technologies: ["Wireshark", "TCP/IP", "Network Analysis", "Security"],
  },
  {
    title: "Web Server on AWS",
    description:
      "Deployed and configured a web server on AWS, implemented user access controls, and ensured secure remote connections for cloud hosting.",
    technologies: ["AWS", "Linux", "Cloud Infrastructure", "Security"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <h2 className="section-heading">Projects</h2>
      <div className="group/list">
        {projects.map((project, index) => (
          <div key={index} className="group project-card mb-12 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:before:bg-muted/50">
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug">
                {project.liveUrl || project.githubUrl ? (
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link external-link"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="text-foreground">{project.title}</span>
                )}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
              <div className="mt-3 flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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

export default ProjectsSection;
