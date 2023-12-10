import { ProjectData } from "@/app/types";

const projects: Record<string, ProjectData> = {
    "bitpass": {
        "name": "bitpass",
        "slug": "bitpass",
        "info_url": "",
        "deployment_url": "",
        "repository_url": "https://github.com/zackwalton/bitpass",
        "excerpt": "A powerful and easy-to-use secure password generation and analysis tool",
        "features": [
            "Generate passwords of various complexities (varying lengths, character sets, etc.)",
            "Analyse passwords for strength and security against brute force attacks",
            "Learn about what makes a password strong and secure as you play with our tool"
        ],
        "technologies": [
            "Electron",
            "React",
            "Javascript",
            "Tailwind CSS",
            "HTML"
        ]
    },
    'disclate': {
        "name": "disclate (WIP)",
        "slug": "disclate",
        "info_url": "",
        "deployment_url": "",
        "repository_url": "",
        "excerpt": "A translation bot built with python and the Discord API",
        "features": [
            "Translate messages in real time using the Discord API alongside the Google Cloud Translation API",
            "Set up auto-translation for your whole server or specific categories, channels or threads",
            "Create translation \"links\" between channels, messages are then automatically translated and sent to all linked channels",
            "Translate messages to multiple languages at once (Google Cloud Translation API)",
            "Translate messages to fun languages such as English Pirate (that be the GPT3.5 & GPT4 API)",
            "Guild owners will be able to purchase a monthly subscription to get a higher translation character limit"
        ],
        "technologies": [
            "Python",
            "interactions.py (Discord API)",
            "SQL",
            "Google Cloud Translation API",
            "GPT-4 API"
        ]
    },
    'personal-website': {
        "name": "Personal website",
        "slug": "personal-website",
        "info_url": "zackwalton.com",
        "deployment_url": "https://www.zackwalton.com/",
        "repository_url": "https://github.com/zackwalton/personal-site",
        "excerpt": "My personal website to showcase my work and project experience as a developer",
        "features": [
            "Responsive website using both server-side and client-side rendering (Next.js, React)",
            "Continuous deployment (CD) using Vercel",
            "TailwindCSS for quick styling and prototyping",
            "Built with TypeScript for type safety and code readability",
        ],
        "technologies": [
            "Next.js (App directory)",
            "React",
            "Vercel",
            "Tailwind CSS",
            "TypeScript"
        ]
    },
    "planning-poker": {
        "name": "Planning Poker (WIP)",
        "slug": "planning-poker",
        "info_url": "",
        "deployment_url": "",
        "repository_url": "https://github.com/zackwalton/pointing-poker",
        "excerpt": "A web app for hosting sprint planning poker sessions with your team",
        "features": [
            "Create a planning poker session and have your team join with a unique url (no login required)",
            "Quick and interactive components running on the client side (Material UI)",
            "Real-time updates to the session as users join and vote using websockets (socket.io)",
            "Choose from various pointing decks (Fibonacci, T-Shirt, etc.)"
        ],
        "technologies": [
            "Websockets (socket.io)",
            "Next.js",
            "React",
            "Redis",
            "Material UI (MUI)"
        ]
    }
}

export default projects;