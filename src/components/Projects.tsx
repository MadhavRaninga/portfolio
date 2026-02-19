import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import clothifyImg from "../assets/clothify.png";
import ajioImg from "../assets/ajio.png";
import quizeImg from "../assets/quize.png";
import adminImg from "../assets/admin-panel.png";
const projects = [
  {
    title: "Clothify – MERN Fashion E-Commerce Platform",
    desc: "A full-stack MERN e-commerce platform with user authentication, product and category management, shopping cart, and responsive UI. Built with React, Node.js, Express, and MongoDB.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    live: "https://e-commerce-frontend-3cj.pages.dev/",
    github: "https://github.com/MadhavRaninga/E-commerce-frontend",
    image: clothifyImg,
    gradient: "from-primary/20 to-blue-500/20",
  },
  {
    title: "AJIO-Clone E-Commerce",
    desc: "A responsive fashion e-commerce frontend inspired by AJIO, featuring dynamic product listing, category filtering, shopping cart with localStorage persistence, and modern UI interactions.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    live: "https://ajio-website-project-madhav.vercel.app/",
    github: "https://github.com/MadhavRaninga/Ajio-website-project",
    image: ajioImg,
    gradient: "from-primary/20 to-blue-500/20",
  },
  {
    title: "Interactive Quiz Application",
    desc: "A dynamic quiz web application with multiple-choice questions, real-time score tracking, and instant feedback. Built with JavaScript and responsive UI for engaging learning experience.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://quiz-app-javascript-black.vercel.app/",
    github: "https://github.com/MadhavRaninga/quiz-app-javascript",
    image: quizeImg,
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Firebase Admin Panel",
    desc: "A web-based admin dashboard with secure authentication and real-time database management using Firebase. Features CRUD operations, protected routes, and responsive UI for managing application data.",
    tech: ["React", "Firebase", "HTML", "CSS"],
    live: "https://admi-panel-project-firebase.vercel.app/",
    github: "https://github.com/MadhavRaninga/AdmiPanel-Project-Firebase",
    image: adminImg,
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
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
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
