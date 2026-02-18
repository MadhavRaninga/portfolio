import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "JavaScript", level: 92 },
  { name: "TypeScript", level: 75 },
  { name: "HTML & CSS", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Git & GitHub", level: 85 },
  { name: "REST APIs", level: 88 },
  { name: "Redux", level: 78 },
  { name: "Next.js", level: 70 },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 gradient-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">What I work with</p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">Skills & Technologies</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card p-5 rounded-xl group hover:border-primary/40 transition-all duration-300 hover:glow-primary"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                <span className="text-xs font-mono text-primary">{skill.level}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.07, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
