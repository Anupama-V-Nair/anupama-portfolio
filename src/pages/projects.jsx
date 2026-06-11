import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Projects() {
    const projects = [
        {
            id: "ai-interviewprep",
            number: "01",
            title: "AI InterviewPrep",
            description:
                "An intelligent interview preparation platform designed to help users practice technical and behavioral interviews with AI-powered guidance.",
            tech: "React • Node.js • MongoDB • AI",
        },
        {
            id: "readme",
            number: "02",
            title: "ReadMe",
            description:
                "A reading and writing platform where users can publish stories, explore content, and build a community around ideas.",
            tech: "MERN • TailwindCSS • Cloudinary",
        },
        {
            id: "portfolio",
            number: "03",
            title: "Personal Portfolio",
            description:
                "A responsive portfolio website built to showcase projects, skills, and creative work through an elegant user experience.",
            tech: "HTML • CSS • JavaScript",
        },
        {
            id: "netflix-clone",
            number: "04",
            title: "Netflix Clone",
            description:
                "A Netflix-inspired interface featuring responsive layouts, movie browsing experiences, and modern UI interactions.",
            tech: "HTML • CSS",
        },
    ];

    return (
        <section className="min-h-screen pb-24 bg-[#F8F4EC] text-[#2C2C2C]">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pt-4 md:pt-1 pb-20 md:pb-24">

        {/* Heading */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
           className="text-center mb-14 md:mb-20 pt-10 md:pt-16"
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.12em] md:tracking-[0.2em]">
                PROJECTS
            </h2>

            <div className="w-24 h-[2px] bg-[#C9A66B] mx-auto mt-6 mb-8"></div>

            <p className="max-w-2xl mx-auto text-[#6B5E57] leading-7 md:leading-8 text-center text-sm sm:text-base">
                A collection of projects that reflect my journey in web
                development, problem-solving, and creating meaningful digital
                experiences.
            </p>
        </motion.div>

        {/* Project List */}
        <div className="space-y-16 md:space-y-24">

            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? -100 : 100,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    <Link
                        to={`/projects/${project.id}`}
                        className="group block"
                    >

                        <div className="border-b border-[#D8CFC2] pb-10">

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">

                                {/* Left Content */}
                                <div>

                                    <span className="text-5xl sm:text-6xl md:text-7xl font-light text-[#C9A66B]/70">
                                        {project.number}
                                    </span>

                                    <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-light group-hover:text-[#C9A66B] transition-all duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="mt-4 max-w-xl text-[#6B5E57] leading-7 md:leading-8 text-sm sm:text-base">
                                        {project.description}
                                    </p>

                                    <p className="mt-5 text-xs sm:text-sm tracking-wider text-[#A88A5B]">
                                        {project.tech}
                                    </p>

                                </div>

                                {/* Right CTA */}
                                <div className="flex items-center gap-3 text-[#C9A66B] self-start md:self-center text-sm md:text-base">

                                    <span className="group-hover:translate-x-2 transition-all duration-300">
                                        View Details
                                    </span>

                                    <span className="text-xl group-hover:translate-x-2 transition-all duration-300">
                                        →
                                    </span>

                                </div>

                            </div>

                        </div>

                    </Link>
                </motion.div>
            ))}

        </div>
    </div>
    </section>

    );
}

export default Projects;
