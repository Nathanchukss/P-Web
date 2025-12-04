const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground">
      <p>
        Loosely designed in{" "}
        <a
          href="https://figma.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Figma
        </a>{" "}
        and coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Visual Studio Code
        </a>
        . Built with{" "}
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          React
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://lovable.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Lovable
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
