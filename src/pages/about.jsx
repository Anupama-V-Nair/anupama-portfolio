import cutoutProfile from "../assets/cutout-profile.png";

// skills images (NO BG ICONS)
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import { div } from "framer-motion/client";

function About() {

  const education = [
    { year: "2020", title: "Class X", score: "90%", school: "St. Lawrence Public Sr. Sec. School" },
    { year: "2022", title: "Class XII", score: "68.8%", school: "St. Lawrence Public Sr. Sec. School" },
    { year: "2022 - 2026", title: "B.Tech CSE", score: "CGPA: 8.32", school: "Greater Noida Institute of Technology" }
  ];

  const skills = [html, css, js, react, tailwind, node, mongo, git, github];

  const beyondTech = [
    {
      title: "Creative writing",
      desc: "Expressing ideas and stories in effective words"
    },
    {
      title: "Photography",
      desc: "Capturing moments and perspectives through a lens."
    },
    {
      title: "Reading",
      desc: "Exploring books across fiction, history, and self-growth."
    },
    {
      title: "Music",
      desc: "A source of creativity, focus, and inspiration."
    },
    {
      title: "History & Mythology",
      desc: "Learning from cultures, legends, and historical events."
    },
    {
      title: "Movies & Series",
      desc: "Appreciating powerful storytelling and world-building."
    }
  ];

  return (
    <section className="relative bg-[#F8F4EC] text-[#2C2C2C] overflow-hidden min-h-screen ">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6 md:pt-1 pb-16 md:pb-20">

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative flex justify-center">

            {/* BLENDED CIRCLE (FIXED) */}
            <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[590px] md:h-[590px] bg-[#C9A66B]/30 rounded-full top-8 md:top-9" />

            <img
              src={cutoutProfile}
              className="relative z-10 w-[220px] sm:w-[280px] md:w-[380px] object-contain rounded-[1.5rem] mix-blend-multiply opacity-100 -translate-y-8 md:-translate-y-26"
              alt="profile"
            />

          </div>

          {/* TEXT */}
          <div className="space-y-6">

            <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] md:tracking-[0.15em] text-center">
              ABOUT ME
            </h2>

            <p className="text-[#6B5E57] leading-7 md:leading-8 border border-[#ddc3a0] rounded-2xl text-center p-5">
              I am a Computer Science Engineering student passionate about frontend development,
              UI design, and creating meaningful digital experiences.
              I enjoy turning ideas into interactive web applications with smooth UX.
            </p>



          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-11xl mx-auto px-6 gap-3">
        <div className="h-[2px] bg-[#C9A66B] opacity-60" />
      </div>

      {/* EDUCATION */}
      <div className="">

        <h2 className="text-3xl md:text-4xl font-light text-center tracking-[0.15em]  mt-12 mb-16 -translate-x-1">
          EDUCATION
        </h2>

        <div className="flex flex-col items-center gap-4">

          {education.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[70%] bg-white/70 border border-[#D8CFC2] rounded-2xl p-5 md:p-6 shadow-md text-center"
            >

              <p className="text-sm text-[#C9A66B]">{item.year}</p>
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="text-[#6B5E57]">{item.score}</p>
              <p className="text-[#6B5E57]">{item.school}</p>

            </div>
          ))}

        </div>
        <div className="w-6xl h-4 "></div>
      </div>
      {/* DIVIDER */}
      <div className="max-w-11xl mx-auto px-6 gap-3">
        <div className="h-[2px] bg-[#C9A66B] opacity-60" />
      </div>

      {/*beyond tech skills*/}

      <div>
        <h2 className="text-3xl md:text-4xl font-light text-center tracking-[0.15em] mt-12 mb-16 -translate-x-1">BEYOND TECH</h2>

        <div className="flex flex-col items-center gap-4">

          {beyondTech.map((item,index) => (
            <div
            key={index}
            className="w-full md:w-[70%] bg-white/70 border border-[#D8CFC2] rounded-2xl p-5 md:p-6 shadow-md text-center">
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="text-[#6B5E57]">{item.desc}</p>
            </div>
          ))}
        </div>
          <div className="w-6xl h-4 "></div>
      </div>
      

      {/* Floating Skills*/}
      <div className="hidden md:block fixed bottom-0 right-0 w-[260px] h-[70vh] pointer-events-none">

        <div className="relative w-full h-full">

          {skills.map((icon, i) => (
            <img
              key={i}
              src={icon}
              className="absolute w-10 h-10 opacity-80 animate-floatSkill"
              style={{
                left: `${20 + (i % 3) * 60}px`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${6 + i}s`
              }}
            />
          ))}

        </div>
      </div>

    </section>
  );
}

export default About;