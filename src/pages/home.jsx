import { useEffect, useState } from "react";
import TypingText from "../components/typingtext";

function Home() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 40;
      const y = (e.clientY - window.innerHeight / 2) / 40;

      setPosition({
        x,
        y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">

      <div
        className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#C9A66B] shadow-[0_0_30px_rgba(201,166,107,0.35)] transition-transform duration-100"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <img
          src="/anupama.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C]">
        Anupama V Nair
      </h1>

      <p className="mt-4 text-base sm:text-lg md:text-xl text-[#6B5E57] min-h-[32px]">
        <TypingText />
      </p>

    </section>
  );
}

export default Home;