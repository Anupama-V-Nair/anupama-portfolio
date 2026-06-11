import { useParams } from "react-router-dom";
import {projectData} from "../data/projectData"


function ProjectDetails() {
  const { id } = useParams();

  const project = projectData[id];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl">Project Not Found</h1>
            </div>
        );
    }

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">

            {/* Hero */}

            <div className="text-center mb-16">
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-[0.15em]">
                    {project.title}
                </h1>

                <p className="mt-4 md:mt-6 text-base md:text-lg text-[#6B5E57] max-w-2xl mx-auto">
                    {project.tagline}
                </p>
            </div>

            {/* Banner */}

            <img
                src={project.banner}
                alt={project.title}
                className="w-full h-[250px] sm:h-[400px] md:h-[700px] object-cover rounded-[1.5rem] md:rounded-[2rem] mb-16 md:mb-20 shadow-lg"
            />

            {/* Overview */}

            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl mb-6">Overview</h2>
                <p className="leading-8 text-[#6B5E57]">
                    {project.overview}
                </p>
            </section>

            {/* Why I Built It */}

            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl mb-6">Why I Built It</h2>
                <p className="leading-7 md:leading-8 text-[#6B5E57]">
                    {project.whyBuilt}
                </p>
            </section>

            {/* Tech Stack */}

            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl mb-6">Tech Stack</h2>

                <div className="flex flex-wrap gap-4">
                    {project.tech.map((item) => (
                        <span
                            key={item}
                            className="px-4 md:px-5 py-2 rounded-full border border-[#C9A66B] text-[#A88A5B] text-sm md:text-base"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </section>

            {/* Features */}

            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl mb-6">Features</h2>

                <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
                    {project.features.map((feature) => (
                        <li key={feature}>
                            ✓ {feature}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Challenges */}

            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl mb-6">
                    Challenges
                </h2>

                <div className="space-y-5">
                    {project.challenges.map((item) => (
                        <div
                            key={item}
                            className="p-4 md:p-5 rounded-2xl border border-[#D8CFC2]"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery */}

            <section className="mb-24">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-8">
                    Gallery
                </h2>

                <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">

                    {project.gallery.map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-[95%] sm:w-[85%] md:w-[70%] snap-center">

                            <img
                                src={image}
                                alt={`Screenshot ${index + 1}`}
                                className="w-full h-[220px] sm:h-[350px] md:h-[500px] object-cover rounded-[1.5rem] md:rounded-[2rem] shadow-lg"
                            />

                        </div>
                    ))}

                </div>
            </section>

            {/* Learned */}

            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl mb-6">
                    What I Learned
                </h2>

                <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
                    {project.learned.map((item) => (
                        <li key={item}>• {item}</li>
                    ))}
                </ul>
            </section>

            {/* Future */}

            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl mb-6">
                    Future Improvements
                </h2>

                <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
                    {project.future.map((item) => (
                        <li key={item}>• {item}</li>
                    ))}
                </ul>
            </section>

            {/* Links */}

            <section className="flex flex-wrap gap-5">

                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 md:px-8 py-3 rounded-full border border-[#C9A66B] bg-[#C9A66B] text-white hover:bg-[#dcceb6] hover:text-black transition text-sm md:text-base"
                >
                    GitHub Repository
                </a>

            </section>

        </section>
    );
}

export default ProjectDetails;

