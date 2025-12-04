import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS, featuring smooth scroll navigation, responsive design, and modern UI patterns inspired by industry-leading developers.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A full-stack task management application with real-time updates, user authentication, and collaborative features. Built with a focus on clean architecture and scalability.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays real-time weather data with beautiful visualizations. Features location-based weather updates and 7-day forecasts.",
    technologies: ["JavaScript", "API Integration", "Chart.js", "CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform with product filtering, shopping cart functionality, and secure checkout process. Optimized for performance and accessibility.",
    technologies: ["React", "Redux", "Stripe", "Firebase"],
    githubUrl: "https://github.com",
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
                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link external-link"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
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
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live site"
                  >
                    <ExternalLink className="h-4 w-4" />
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
