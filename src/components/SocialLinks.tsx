import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/nathannwaokocha", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/nathannwaokocha", label: "LinkedIn" },
  { icon: Mail, href: "mailto:chukwudinwaokocha@gmail.com", label: "Email" },
];

const SocialLinks = () => {
  return (
    <ul className="flex items-center gap-5">
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="social-link block"
          >
            <link.icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
