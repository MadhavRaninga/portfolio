import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack e-commerce app with product listings, cart, checkout, and payment integration. Built with React, Node.js, Express, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "#",
    github: "#",
    gradient: "from-primary/20 to-blue-500/20",
  },
  {
    title: "Portfolio Website",
    desc: "A sleek developer portfolio with animated sections, dark theme, and responsive design. Showcases projects and skills beautifully.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "#",
    github: "#",
    gradient: "from-blue-500/20 to-accent/20",
  },
  {
    title: "Admin Dashboard",
    desc: "A comprehensive admin panel with data visualization, user management, analytics charts, and role-based access control.",
    tech: ["React", "Express", "MongoDB", "Chart.js"],
    live: "#",
    github: "#",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Task Manager App",
    desc: "A productivity app with drag-and-drop task management, real-time updates, user authentication, and team collaboration features.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    live: "#",
    github: "#",
    gradient: "from-primary/20 to-accent/20",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">My work</p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:glow-primary"
            >
              {/* Image placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-card/20 group-hover:bg-card/10 transition-all duration-500" />
                <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-500">💻</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-primary border border-glass-border">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-glass-border text-foreground hover:border-primary/50 transition-all duration-300"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
