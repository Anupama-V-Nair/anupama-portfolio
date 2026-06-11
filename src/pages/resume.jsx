import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

function Resume() {
  const highlights = [
    {
      title: "CGPA",
      value: "8.32",
    },
    {
      title: "Projects",
      value: "4+",
    },
    {
      title: "Tech Stack",
      value: "MERN",
    },
    {
      title: "Education",
      value: "B.Tech CSE",
    },
  ];

  const timeline = [
    {
      year: "2022",
      text: "Started B.Tech in Computer Science & Engineering",
    },
    {
      year: "2024",
      text: "Focused on Frontend Development and UI Design",
    },
    {
      year: "2025",
      text: "Built React & MERN Stack Projects",
    },
    {
      year: "2026",
      text: "Graduating and preparing for professional opportunities",
    },
  ];

  const strengths = [
    "Responsive Web Development",
    "Frontend Development",
    "UI/UX Focused Design",
    "Problem Solving with C++",
    "Creative Thinking",
    "Team Collaboration",
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20">

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.12em] md:tracking-[0.2em] text-[#2C2C2C]">
          RESUME
        </h1>

        <div className="w-24 h-[2px] bg-[#C9A66B] mx-auto mt-6 mb-8"></div>

        <p className="max-w-2xl mx-auto text-[#6B5E57] leading-8">
          A concise overview of my education, technical skills,
          projects, and professional journey.
        </p>
      </motion.div>

      {/* Resume Preview */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-20"
      >
        <div className="bg-white/60 backdrop-blur-sm border border-[#D8CFC2] rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-6 md:p-10 shadow-sm">

          <div className="flex flex-col md:flex-row items-center gap-10">

            <img
              src={profile}
              alt="Resume Preview"
              className="w-[160px] sm:w-[200px] md:w-[220px] rounded-[1.5rem] border border-[#D8CFC2] mx-auto"
            />

            <div className="flex-1">

              <h2 className="text-2xl md:text-3xl font-light text-[#2C2C2C] text-center md:text-left">
                Anupama V Nair
              </h2>

              <p className="mt-3 text-[#6B5E57] text-center md:text-left">
                Frontend Developer • MERN Enthusiast
              </p>

              <p className="mt-6 leading-7 md:leading-8 text-[#6B5E57] text-center md:text-left">
                Passionate about building elegant, user-friendly web
                applications while continuously exploring modern
                technologies and creative problem-solving approaches.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                <a
                  href="AnupamaNair_ResumeMERN.pdf"
                  className="px-6 py-3 rounded-full border border-[#C9A66B] hover:bg-[#C9A66B] hover:text-white transition-all duration-300"
                >
                  Download Resume
                </a>

                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full border border-[#D8CFC2] hover:border-[#C9A66B] transition-all duration-300"
                >
                  Contact Me
                </Link>

              </div>

            </div>

          </div>

        </div>
      </motion.div>

      {/* Highlights */}

      <section className="mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">

          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-white/60 backdrop-blur-sm border border-[#D8CFC2] rounded-[1.5rem] p-6 text-center"
            >
              <h3 className="text-2xl md:text-3xl text-[#C9A66B] font-light">
                {item.value}
              </h3>

              <p className="mt-3 text-[#6B5E57]">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Journey */}

      <section className="mt-24">

        <h2 className="text-2xl md:text-3xl font-light text-center mb-8 md:mb-12">
          Journey Snapshot
        </h2>

        <div className="space-y-5">

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-white/60 backdrop-blur-sm border border-[#D8CFC2] rounded-[1.5rem] p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3">

                <span className="text-[#C9A66B] text-xl min-w-[80px]">
                  {item.year}
                </span>

                <p className="text-[#6B5E57]">
                  {item.text}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </section>

      {/* Strengths */}

      <section className="mt-24">

        <h2 className="text-3xl font-light text-center mb-12">
          Key Strengths
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

          {strengths.map((strength, index) => (
            <motion.div
              key={strength}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="bg-white/60 backdrop-blur-sm border border-[#D8CFC2] rounded-[1.5rem] p-5"
            >
              <p className="text-[#6B5E57]">
                ✓ {strength}
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-light text-[#2C2C2C]">
          Interested in working together?
        </h2>

        <p className="mt-4 text-[#6B5E57]">
          Let's connect and create something meaningful.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

          <a
            href="AnupamaNair_ResumeMERN.pdf"
            className="px-6 py-3 rounded-full border border-[#C9A66B] hover:bg-[#C9A66B] hover:text-white transition-all duration-300"
          >
            Download Resume
          </a>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-full border border-[#D8CFC2] hover:border-[#C9A66B] transition-all duration-300"
          >
            Contact Me
          </Link>

        </div>
      </motion.div>

    </section>
  );
}

export default Resume;