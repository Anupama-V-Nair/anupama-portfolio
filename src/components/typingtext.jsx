import { useEffect, useState } from "react";

function TypingText() {
    const words = [
        "Frontend Developer",
        "Coder",
        "MERN Stack Developer",
    ];

    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1));

                if (text === currentWord) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1200);
                }
            } else {
                setText(currentWord.substring(0, text.length - 1));

                if (text === "") {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 50 : 120);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    return (
        <span className="text-xl md:text-3xl font-medium text-[#6B5E57] min-h-[40px]">
            {text}
            <span className="animate-pulse">|</span>
        </span>
    );
}

export default TypingText;