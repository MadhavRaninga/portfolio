import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-glass-border">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm gradient-text font-bold">&lt;Madhav /&gt;</p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Madhav Raninga. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:madhav@example.com" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl border border-glass-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
