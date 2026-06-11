import { useParams } from "react-router-dom";
import profile from "../assets/profile.jpg";

import interviewbanner from "../assets/interview-banner.png";
import interview1 from "../assets/interview1.png";
import interview2 from "../assets/interview2.png";
import interview3 from "../assets/interview3.png";
import interview4 from "../assets/interview4.png";
import interview5 from "../assets/interview5.png";

import netflix1 from "../assets/netflix1.png";
import netflix2 from "../assets/netflix2.png";
import netflix3 from "../assets/netflix3.png";
import netflix4 from "../assets/netflix4.png";
import netflix5 from "../assets/netflix5.png";
import netflix6 from "../assets/netflix6.png";

import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import portfolio5 from "../assets/portfolio5.png";

import ReadMe1 from "../assets/ReadMe1.png"
import ReadMe2 from "../assets/ReadMe2.png"
import ReadMe3 from "../assets/ReadMe3.png"
import ReadMe4 from "../assets/ReadMe4.png"
import ReadMe5 from "../assets/ReadMe5.png"

export const projectData = {
    "ai-interviewprep": {
        title: "AI InterviewPrep",
        tagline: "Practice smarter. Interview with confidence.",

        banner: interviewbanner,

        gallery: [
            interview5,
            interview4,
            interview3,
            interview2,
            interview1,
        ],

        github: "https://github.com/Anupama-V-Nair/AI-Interview.git",

        overview:
            "An intelligent interview preparation platform that helps users prepare for technical and behavioral interviews through guided practice and AI-powered assistance.",

        whyBuilt:
            "I wanted to build a platform that helps students gain confidence before interviews while exploring different fields in tech.",

        tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],

        features: [
            "User Authentication",
            "Mock Interview Sessions",
            "Responsive Design",
            "Dashboard",
            "AI-powered feedback",
            "Voice interviews"
        ],

        challenges: [
            "Managing authentication flow across pages.",
            "Structuring backend APIs efficiently.",
            "Designing a responsive user experience."
        ],

        learned: [
            "JWT Authentication",
            "REST API Design",
            "MongoDB Data Modeling",
            "State Management"
        ],

        future: [
            "Question Bank",
            "Performance optimization"
        ]
    },

    "readme": {
        title: "ReadMe",
        tagline: "A platform where stories meet community.",

        banner: ReadMe1,

        gallery: [
            ReadMe2,
            ReadMe3,
            ReadMe4,
            ReadMe5,
        ],

        github: "https://github.com/Anupama-V-Nair/Reading-Site.git",
        demo: "#",

        overview:
            "A reading and writing platform allowing users to publish stories, explore content, and connect through ideas.",

        whyBuilt:
            "Built to encourage reading habits and create a space where users can share their writing.",

        tech: ["React", "Express", "MongoDB", "Cloudinary", "Firebase"],

        features: [
            "Story Publishing",
            "User Profiles",
            "Content Discovery",
            "Responsive UI"
        ],

        challenges: [
            "Designing content structures.",
            "Creating scalable database schemas."
        ],

        learned: [
            "CRUD Operations",
            "Database Design",
            "Frontend Architecture"
        ],

        future: [
            "Bookmarks",
            "Reading Analytics",
            "Dark Mode"
        ]
    },

    "portfolio": {
        title: "Personal Portfolio",
        tagline: "Designing experiences that showcase both code and creativity.",

        banner: portfolio1,

        gallery: [
            portfolio2,
            portfolio3,
            portfolio4,
            portfolio5,
        ],

        github: "https://github.com/Anupama-V-Nair/portfolio-using-html-css-and-JavaScript.git",
        demo: "#",

        overview:
            "A personal portfolio built to present projects, skills, achievements, and creative work through an elegant interface.",

        whyBuilt:
            "To create a professional online presence while experimenting with modern UI and animation techniques.",

        tech: ["HTML", "CSS", "JavaScript"],

        features: [
            "Responsive Design",
            "Interactive Navigation",
            "Project Showcase",
            "Custom Styling"
        ],

        challenges: [
            "Responsive layouts across devices.",
            "Maintaining visual consistency."
        ],

        learned: [
            "UI Design",
            "Animation Principles",
            "Responsive Development"
        ],

        future: [
            "Dark Theme",
            "CMS Integration",
            "More Interactive Elements"
        ]
    },

    "netflix-clone": {
        title: "Netflix Clone",
        tagline: "Bringing the streaming experience to the web.",

        banner: netflix1,

        gallery: [
            netflix1,
            netflix2,
            netflix3,
            netflix4,
            netflix5,
        ],

        github: "https://github.com/Anupama-V-Nair/netflix-clone.git",
        demo: "#",

        overview:
            "A Netflix-inspired interface featuring movie browsing and responsive layouts.",

        whyBuilt:
            "Built to understand API integration and modern frontend development practices.",

        tech: ["HTML", "CSS"],

        features: [
            "Responsive Layout",
            "API Integration",
        ],

        challenges: [
            "Recreating Netflix-inspired layouts."
        ],

        learned: [
            "Component Architecture",
            "Responsive UI"
        ],

        future: [
            "User Profiles",
            "Watchlist",
            "Trailer Support"
        ]
    }
};
