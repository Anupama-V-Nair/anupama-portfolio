import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: "Email",
            value: "anupamanair2224@gmail.com",
            link: "mailto:anupamanair2224@gmail.com",
        },
        {
            icon: <FaPhoneAlt />,
            title: "Phone",
            value: "+91 80762 22453",
            link: "tel:+918076222453",
        },
        {
            icon: <FaLinkedin />,
            title: "LinkedIn",
            value: "Connect Professionally",
            link: "https://www.linkedin.com/in/anupama-v-nair-318433291/",
        },
        {
            icon: <FaGithub />,
            title: "GitHub",
            value: "View My Projects",
            link: "https://github.com/Anupama-V-Nair",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20 min-h-screen">

            {/* Hero */}

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.12em] md:tracking-[0.2em] text-[#2C2C2C]">
                    CONTACT
                </h1>

                <div className="w-20 md:w-24 h-[2px] bg-[#C9A66B] mx-auto mt-5 md:mt-6 mb-6 md:mb-8"></div>

                <p className="max-w-2xl mx-auto text-[#6B5E57] leading-7 md:leading-8 text-sm sm:text-base">
                    Have an idea, a project, or simply want to say hello?
                    I'm always open to meaningful conversations and opportunities.
                </p>
            </motion.div>

            {/* Main Content */}

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-16 md:mt-24 items-center">

                {/* Left Side */}

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight text-[#2C2C2C]">
                        Let's
                        <br />
                        Connect.
                    </h2>

                    <p className="mt-6 md:mt-8 text-[#6B5E57] leading-7 md:leading-8 max-w-md mx-auto md:mx-0">
                        Whether it's a project, collaboration, internship opportunity,
                        or just a conversation about technology and creativity,
                        I'd love to hear from you.
                    </p>

                    <div className="mt-8 md:mt-12 relative overflow-hidden">
                        <span className="text-[4rem] sm:text-[5rem] md:text-[9rem] font-bold text-[#C9A66B]/10 select-none whitespace-nowrap">
                            CONNECT
                        </span>
                    </div>
                </motion.div>

                {/* Right Side */}

                <div className="grid gap-4 md:gap-6">

                    {contactInfo.map((item, index) => (
                        <motion.a
                            key={item.title}
                            href={item.link}
                            target={item.title !== "Email" && item.title !== "Phone" ? "_blank" : ""}
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            whileHover={{
                                y: -5,
                            }}
                            className="flex items-center gap-4 md:gap-5 p-5 md:p-6 rounded-[1.5rem] border border-[#D8CFC2] bg-white/50 backdrop-blur-sm shadow-sm hover:border-[#C9A66B] transition-all duration-300"
                        >
                            <div className="text-xl md:text-2xl text-[#C9A66B]">
                                {item.icon}
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-base md:text-lg font-medium text-[#2C2C2C]">
                                    {item.title}
                                </h3>

                                <p className="text-[#6B5E57] text-xs sm:text-sm mt-1 break-all">
                                    {item.value}
                                </p>
                            </div>

                        </motion.a>
                    ))}

                </div>

            </div>

            {/* Divider */}

            <div className="w-full h-px bg-[#D8CFC2] my-16 md:my-20"></div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <p className="text-xl sm:text-2xl md:text-3xl font-light italic text-[#6B5E57]">
                    "Let's create something meaningful together."
                </p>

                <p className="mt-5 md:mt-6 text-[#9A8D84] tracking-[0.12em] md:tracking-[0.15em] uppercase text-xs md:text-sm">
                    Anupama V Nair
                </p>
            </motion.div>

        </section>
    );
}

export default Contact;