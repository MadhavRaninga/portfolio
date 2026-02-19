import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Rocket } from "lucide-react";
import profileImg from "../assets/madhav.jpeg";
const highlights = [
  { icon: Code2, label: "Full Stack", desc: "MERN stack developer with end-to-end project experience" },
  { icon: GraduationCap, label: "Education", desc: "BCA student – Computer Applications" },
  { icon: Rocket, label: "Passionate", desc: "Always learning new technologies and best practices" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Get to know me</p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile image area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-2 rounded-2xl gradient-border mx-auto max-w-sm">
              <div className="w-full aspect-square rounded-xl overflow-hidden">
                <img
                  src={profileImg}
                  alt="Madhav Raninga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Passionate MERN Stack Developer building for the modern web
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm Madhav Raninga, a MERN Stack Developer focused on building clean,
              scalable, and user-friendly web applications. I work with MongoDB,
              Express.js, React, and Node.js — the core technologies behind modern
              full-stack development.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From crafting responsive front-end interfaces to developing secure
              back-end APIs, I enjoy the complete development process. I'm
              continuously learning, improving my skills, and striving to create
              better products and digital experiences.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="glass-card p-4 rounded-xl hover:border-primary/40 transition-all duration-300 group"
                >
                  <item.icon className="text-primary mb-2 group-hover:scale-110 transition-transform" size={22} />
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
