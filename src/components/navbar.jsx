import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Header */}

      <header className="fixed top-0 left-0 w-full h-[85px] z-50 backdrop-blur-xs bg-[#F8F4EC]/80 border-b border-[#D8CFC2]">
        <nav className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">

          <h1 className="text-sm sm:text-lg md:text-2xl font-bold tracking-[0.15em] md:tracking-[0.2em] text-[#2C2C2C] truncate">
            ANUPAMA V NAIR
          </h1>

          <button
            onClick={() => setIsOpen(true)}
            className=" text-2xl md:text-3xl text-[#2C2C2C] hover:text-[#C9A66B] transition-all duration-300">
            <HiOutlineMenuAlt3 />
          </button>

        </nav>
      </header>

      <div className="h-[85px]" />

      <AnimatePresence>
        {isOpen && (
          <>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
              className=" fixed inset-0 bg-black/30 backdrop-blur-sm z-[90]"/>

            {/* Sidebar */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              className=" fixed top-0 right-0 h-screen w-[85%] sm:w-[70%] md:w-[50%] lg:w-[35%] max-w-[450px] bg-[#F8F4EC] border-l border-[#D8CFC2] shadow-2xl z-[100]">

              {/* Close Button */}

              <button
                onClick={closeMenu}
                className=" absolute top-6 right-6 text-3xl text-[#2C2C2C] hover:text-[#C9A66B] transition-all duration-300 ">
                <HiOutlineX />
              </button>

              <div className="h-full flex flex-col px-6 sm:px-8 md:px-10 py-10">

                {/* Profile */}

                <div className="mb-10 text-center">

                  <img
                    src="favicon-bg.png"
                    alt="Anupama"
                    className=" w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto rounded-full object-cover border-2 border-[#C9A66B] shadow-lg " />

                  <h2 className=" mt-5 text-lg md:text-xl font-semibold tracking-wide text-[#2C2C2C] ">
                    Anupama V Nair
                  </h2>

                  <p
                    className=" mt-2 text-sm text-[#6B5E57] ">
                    Frontend & MERN Developer
                  </p>

                </div>

                {/* Navigation */}

                <div className="flex flex-col gap-4">

                  {[
                    ["HOME", "/"],
                    ["ABOUT", "/about"],
                    ["PROJECTS", "/projects"],
                    ["SKILLS", "/skills"],
                    ["CONTACT", "/contact"],
                    ["RESUME", "/resume"],
                  ].map(([title, path]) => (
                    <Link
                      key={title}
                      to={path}
                      onClick={closeMenu}
                      className=" text-lg md:text-xl font-light tracking-[0.18em] md:tracking-[0.25em] text-[#2C2C2C] hover:text-[#C9A66B] hover:translate-x-2 transition-all duration-300 ">
                      {title}
                    </Link>
                  ))}

                </div>

                {/* Social */}

                <div className="mt-10 flex flex-wrap gap-4 text-sm">

                  <a
                    href="https://github.com/Anupama-V-Nair"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#6B5E57] hover:text-[#C9A66B] transition-all"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/anupama-v-nair-318433291/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#6B5E57] hover:text-[#C9A66B] transition-all"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="mailto:anupamanair2224@gmail.com"
                    className="text-[#6B5E57] hover:text-[#C9A66B] transition-all"
                  >
                    Email
                  </a>

                </div>

                {/* Footer */}

                <div className="mt-auto pt-6 border-t border-[#D8CFC2]">

                  <p className="text-sm text-[#6B5E57]">
                    anupamanair2224@gmail.com
                  </p>

                  <p className="mt-2 text-sm text-[#6B5E57]">
                    +91 80762 22453
                  </p>

                  <p
                    className=" mt-5 text-xs tracking-[0.2em] uppercase text-[#9A8D84]">
                    Delhi • India
                  </p>

                </div>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
