import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const floatingIcons = [
  { label: "React", icon: "⚛️", x: "10%", y: "20%", delay: 0 },
  { label: "Node", icon: "🟢", x: "85%", y: "15%", delay: 0.5 },
  { label: "MongoDB", icon: "🍃", x: "80%", y: "70%", delay: 1 },
  { label: "JS", icon: "🟨", x: "15%", y: "75%", delay: 1.5 },
];

const roles = ["Full Stack Developer", "MERN Stack Developer"];

/* ✅ Typing Component */
const AnimatedRole = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const typingSpeed = 100;
    const deletingSpeed = 60;
    const pauseTime = 1500;

    let timer;

    if (!isDeleting && text.length < current.length) {
      timer = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, typingSpeed);
    } 
    else if (!isDeleting && text.length === current.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } 
    else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, deletingSpeed);
    } 
    else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-xl md:text-2xl text-muted-foreground font-medium mb-3 h-8"
    >
      {text}
      <span className="animate-pulse">|</span>
    </motion.p>
  );
};

/* ✅ HERO */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={item.label}
          className="absolute text-4xl md:text-5xl select-none pointer-events-none"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <span className="opacity-30">{item.icon}</span>
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest uppercase">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm <span className="gradient-text">Madhav Raninga</span>
        </motion.h1>

        {/* Typing role */}
        <AnimatedRole />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg"
        >
       I build modern, scalable, and high-performance web applications using the MERN stack (MongoDB, Express, React, Node.js), transforming ideas into seamless digital experiences.

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:scale-105"
          >
            View Projects
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-3.5 rounded-xl border border-glass-border bg-card/40 backdrop-blur text-foreground font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:border-primary/50 hover:scale-105"
          >
            Contact Me
            <Mail
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-muted-foreground" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
