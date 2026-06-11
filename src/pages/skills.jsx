import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import cpp from "../assets/C++.png";

function Skills() {
  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "GitHub",
  ];

  const skillIcons = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "React", icon: react },
    { name: "Tailwind", icon: tailwind },
    { name: "Node.js", icon: node },
    { name: "MongoDB", icon: mongo },
    { name: "GitHub", icon: github },
    { name: "Git", icon: git },
    { name: "C++", icon: cpp },
  ];

  const beyondTech = [
    "Photography",
    "Creative Thinking",
    "Storytelling",
    "Music",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">

      {/* Hero */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-[#2C2C2C]">
          SKILLS
        </h1>

        <div className="w-24 h-[2px] bg-[#C9A66B] mx-auto mt-6 mb-8"></div>

        <p className="max-w-2xl mx-auto text-[#6B5E57] leading-8">
          Technologies, tools, and creative strengths that help me transform
          ideas into meaningful digital experiences.
        </p>
      </motion.div>

      {/* Core Expertise */}

      <section className="mt-24">
        <h2 className="text-3xl text-center font-light tracking-wide mb-12">
          Core Expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
              className="px-6 py-3 rounded-full border border-[#C9A66B] bg-white/50 backdrop-blur-sm shadow-sm cursor-default"
            >
              <span className="text-[#2C2C2C] tracking-wide">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skill Ecosystem */}

      <section className="mt-28">
        <h2 className="text-3xl text-center font-light tracking-wide mb-12">
          Skill Ecosystem
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skillIcons.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.08,
              }}
              className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 border border-[#D8CFC2] flex flex-col items-center justify-center shadow-md"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />

              <p className="mt-5 text-[#2C2C2C] tracking-wide">
                {skill.name}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Beyond Tech */}

      <section className="mt-28 mb-12">
        <h2 className="text-3xl text-center font-light tracking-wide mb-12">
          Beyond Tech
        </h2>

        <div className="flex flex-wrap justify-center gap-8">

          {beyondTech.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="w-44 h-44 rounded-full border border-[#C9A66B] bg-white/50 backdrop-blur-sm flex items-center justify-center text-center p-6 shadow-md"
            >
              <span className="text-[#2C2C2C] leading-6 tracking-wide">
                {item}
              </span>
            </motion.div>
          ))}

        </div>
      </section>

    </section>
  );
}

export default Skills;