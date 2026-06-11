import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className="border-t border-[#D8CFC2] bg-[#ebe6dd] mt-20">

            <div className=" max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-12 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">

                {/* Brand */}

                <div className="text-center md:text-left">

                    <div className=" w-16 h-16 mx-auto md:mx-0 rounded-full border-2 border-[#C9A66B] flex items-center justify-center overflow-hidden ">
                        <img
                            src="/favicon-bg.png"
                            alt="AN"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h3 className="mt-4 text-lg md:text-xl font-bold">
                        Anupama V Nair
                    </h3>

                    <p className="mt-2 text-sm text-[#8A7B70]">
                        Frontend & MERN Developer
                    </p>

                </div>

                {/* Quick Links */}

                <div className="text-center md:text-left">

                    <h4 className="font-semibold mb-4">
                        Quick Links
                    </h4>

                    <div className="flex flex-col gap-3">

                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/resume">Resume</Link>

                    </div>

                </div>

                {/* Connect */}

                <div className="text-center md:text-left">

                    <h4 className="font-semibold mb-4">
                        Connect
                    </h4>

                    <div className="flex flex-col gap-4">

                        <a
                            href="https://github.com/Anupama-V-Nair"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center md:justify-start gap-3"
                        >
                            <FaGithub />
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/anupama-v-nair-318433291/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center md:justify-start gap-3"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>

                        <a
                            href="mailto:anupamanair2224@gmail.com"
                            className="flex items-center justify-center md:justify-start gap-3"
                        >
                            <FaEnvelope />
                            Email
                        </a>

                    </div>

                </div>

            </div>

            <div className=" border-t border-[#D8CFC2] py-5 md:py-6 text-center text-xs md:text-sm text-[#8A7B70] px-4 ">
                © 2026 Anupama V Nair. All Rights Reserved.
            </div>

        </footer>
    );
}

export default Footer;