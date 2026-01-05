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
    title: "MedRecord",
    description:
      "Designed and implemented a secure healthcare records system protecting sensitive PHI using role-based access control (RBAC) aligned with HIPAA security principles. Implemented Row-Level Security (RLS) policies in PostgreSQL and comprehensive audit logging for security monitoring and compliance.",
    technologies: ["PostgreSQL", "Supabase", "RLS", "RBAC", "HIPAA", "Security"],
    liveUrl: "https://medrecord-ehr.lovable.app",
    githubUrl: "https://github.com/Nathanchukss/electronic-health-records-ehr",
  },
  {
    title: "ISVP - Intelligent Stock Value Prediction",
    description:
      "Built a hybrid AI system combining Deep Learning (Transformers) and Reinforcement Learning to predict stock prices with 82.3% directional accuracy. Outperforms traditional models like ARIMA and LSTM across RMSE, MAPE, and Directional Accuracy metrics.",
    technologies: ["Python", "PyTorch", "React", "TypeScript", "Machine Learning", "AI"],
    liveUrl: "https://isvp.lovable.app",
    githubUrl: "https://github.com/Nathanchukss/isvp",
  },
  {
    title: "NetTraff - Network Traffic Analysis",
    description:
      "Captured and analyzed packet data to identify network patterns, troubleshoot connectivity issues, and evaluate protocol performance using Wireshark.",
    technologies: ["Wireshark", "VPN", "Network Security", "Data Analysis"],
  },
  {
    title: "FNDEC - Fake News Detection",
    description:
      "Built an NLP-based classification model to identify fake news which preprocessed 10,000+ text samples through stemming, tokenization & TF-IDF vectorization.",
    technologies: ["Data Analysis", "Data Science", "NLP", "Machine Learning"],
  },
  {
    title: "MovieREC",
    description:
      "Developed a recommendation engine using content-based and collaborative filtering on MovieLens dataset, and implemented cosine similarity and TF-IDF vectorization to generate personalized movie suggestions.",
    technologies: ["Data Analysis", "Databases", "Data Science", "Python"],
  },
  {
    title: "CliSer Com",
    description:
      "Developed a socket-based client-server application to enable real-time data exchange over TCP/IP, demonstrating understanding of network protocols and concurrent connections.",
    technologies: ["Python", "Network Security", "TCP/IP", "Socket Programming"],
  },
  {
    title: "Regular Expression Engine",
    description:
      "Engineered a custom regular expression engine in Python from scratch, encompassing over 800 lines of code, to parse complex data structures and match intricate search patterns with 99% accuracy.",
    technologies: ["Python", "Problem Solving", "Critical Thinking", "Debugging"],
    githubUrl: "https://github.com/Nathanchukss/Regular_Expression_Engine",
  },
  {
    title: "FitLaand",
    description:
      "Developed core features of a fitness tracking application designed to help users monitor workouts, set goals, and track progress over time. Implemented features like personalized workout plans, progress charts, and user-friendly dashboards.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Data Management"],
    githubUrl: "https://github.com/digoabari1/fitLaand",
  },
  {
    title: "P15 Puzzle",
    description:
      "Developed a web-based Fifteen Puzzle game featuring dynamic tile movement, live tracking of time and moves, and visual feedback upon completion. Implemented secure user authentication, personalized game preferences, and an admin dashboard.",
    technologies: ["PHP", "JavaScript", "CSS", "Full-Stack Development", "UX Design"],
  },
  {
    title: "WWM - Who Wants to Be a Millionaire",
    description:
      "Developed an interactive web-based quiz game inspired by Who Wants to Be a Millionaire. Designed a responsive interface with HTML and CSS, and implemented dynamic question loading, score tracking, and progression logic using PHP.",
    technologies: ["PHP", "JavaScript", "CSS", "MariaDB", "Web Development"],
  },
  {
    title: "Streamline",
    description:
      "Conceptualized and built a sales platform for musical collections utilizing HTML, CSS, and JavaScript; delivered a presentation to clients, receiving the highest rating for clarity and technical detail.",
    technologies: ["JavaScript", "CSS", "HTML", "Web Design"],
  },
  {
    title: "Web Server on AWS",
    description:
      "Deployed and configured a web server on AWS, implemented user access controls, and ensured secure remote connections for cloud hosting.",
    technologies: ["AWS", "Cloud Computing", "Security", "Web Development"],
  },
  {
    title: "Personal Website",
    description:
      "A fully responsive, modern personal website designed to showcase my portfolio, skills, and experiences. Features intuitive navigation, clean aesthetic, and interactive elements to highlight my work and personal projects.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Figma", "Web Design"],
    githubUrl: "https://github.com/Nathanchukss/P-Web",
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
