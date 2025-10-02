import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    react,
    rocket,
    sass,
    server,
    tailwindcss,
    typescript,
    assistant, 
    snake
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/KRISHN-git',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/krishn-kumar/',
    }
];

export const projects = [
    {
        iconUrl: server,
        theme: 'btn-back-red',
        name: 'HTTP-Server',
        description: 'A production-ready, OS-compatible (Linux, MacOS and Windows) HTTP server built on top of a custom TCP Server in C++, designed to handle 10K+ concurrent users with high performance and low latency. It uses CMake file, multithreading, thread pooling and socket programming with APIs for efficient, high-load connection handling. It also follows Factory and Builder patterns with SOLID principles for scalability and maintainability.',
        link: 'https://github.com/abhi352003/HTTP-SERVER',
    },
    {
        iconUrl: rocket,
        theme: 'btn-back-blue',
        name: 'Rocket Rider',
        description: 'Rocket Rider is a gesture-controlled browser game built with Next.js and TypeScript. Players use hand gestures to control a rocket and dodge falling meteors. The game leverages real-time hand tracking via a webcam using the MediaPipe Tasks Vision Hand Landmarker library. It also provides dynamic audio feedback with Tone.js, creating an engaging and interactive experience for the user.',
        link: 'https://rocket-rider-delta.vercel.app/',
    },
    {
        iconUrl: assistant,
        theme: 'btn-back-yellow',
        name: 'Voice-Buddy',
        description: 'Voice-Buddy is an AI-powered virtual assistant that uses voice commands to interact with the user. It is built with a React frontend and a Node.js backend. The application features user authentication, customizable assistant personas, and integrates with the Gemini API for natural language processing. The app can perform various tasks like answering general questions, searching Google and YouTube, and even providing real-time information such as the current date and time. It provides a personalized and hands-free experience, allowing users to control their search with their voice.',
        link: 'https://github.com/KRISHN-git/Voice-Buddy',
    },
    {
        iconUrl: snake,
        theme: 'btn-back-green',
        name: 'Snake-Game',
        description: 'A console-based Snake Game implemented in C++ that simulates an interactive experience. The player controls a snake to eat food, grow, and track their score while avoiding collisions with its own body. The project features intuitive Arrow Key and WASD controls, real-time self-collision detection, and a dynamic food system that includes both standard growing food and temporary special food for bonus points. Its simple console graphics ensure easy compilation and execution across platforms.',
        link: 'https://github.com/KRISHN-git/Basic-Snake-Game',
    },
];