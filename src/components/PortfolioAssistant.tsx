"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Menu, MessageSquare, Minimize2, Send, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Message {
    id: string;
    type: 'bot' | 'user';
    text: string;
    timestamp: Date;
}

// ── Static data (outside component — not re-created on every render) ───────────

const experienceData = [
    {
        company: "Cymbeline Innovation",
        role: "Software Engineer II",
        period: "Feb 2025 - Present",
        aliases: ["software engineer ii", "cymbeline", "panasonic", "current", "latest", "wms lead", "frontend lead"],
        points: [
            "Currently serving as Frontend Lead on the enterprise Panasonic Warehouse Management System (WMS).",
            "Own frontend delivery using React.js, TypeScript, and Material UI.",
            "Lead feature planning and execution within sprint timelines, assign tasks to junior developers, and resolve blockers.",
            "Collaborate with business stakeholders to gather requirements and refine workflows.",
            "Implement role-based access control (RBAC) at the UI level.",
            "Integrate frontend modules with backend REST APIs for inventory, storage, reporting, and dashboards.",
            "Ensure 99.9% system reliability for critical warehouse operations."
        ]
    },
    {
        company: "Cymbeline Innovation",
        role: "Software Engineer I",
        period: "Feb 2024 - Jan 2025",
        aliases: ["software engineer i", "se1", "stock"],
        points: [
            "Contributed as Software Engineer I on Stock Automation and early-phase WMS feature development.",
            "Developed frontend modules using React.js, TypeScript, and Material UI.",
            "Implemented UI flows for automated stock trading and monitoring dashboards.",
            "Built and integrated frontend components with backend REST APIs (Node.js, Express, MongoDB, Python, PostgreSQL).",
            "Demonstrated strong ownership and consistency, leading to promotion to Software Engineer II."
        ]
    },
    {
        company: "Flyers Soft",
        role: "Software Developer",
        period: "Jan 2023 - Jan 2024",
        aliases: ["flyers", "flyers soft"],
        points: [
            "Delivered frontend-heavy features using React.js, Nuxt.js, Vuetify, and Bootstrap.",
            "Developed REST APIs using Node.js, Express.js, and TypeScript.",
            "Implemented pixel-perfect UI from Figma, Zeplin, and Adobe XD designs.",
            "Mentored interns and junior developers on JavaScript, Git, and development best practices.",
            "Assisted with deployment and production support on DigitalOcean."
        ]
    },
    {
        company: "Triofi Technologies",
        role: "Software Developer",
        period: "Dec 2021 - Dec 2022",
        aliases: ["triofi"],
        points: [
            "Developed reusable React components and frontend modules.",
            "Built backend CRUD APIs using Node.js, Express, and TypeScript.",
            "Proposed and implemented UI/UX improvements.",
            "Collaborated with QA and business teams for feature releases.",
            "Joined as Intern (Dec 2021 – Feb 2022); converted to Full-Time Developer based on performance."
        ]
    },
    {
        company: "Vindhya e-infomedia",
        role: "Assistant Team Lead",
        period: "Jan 2019 - Dec 2020",
        aliases: ["vindhya", "team lead", "assistant team lead"],
        points: [
            "Coordinated with Level 1 technical support engineers to handle escalated issues.",
            "Provided real-time guidance during complex troubleshooting scenarios.",
            "Onboarded, mentored, and trained junior technical support engineers, improving team readiness."
        ]
    },
    {
        company: "Microsys",
        role: "Technical Support Engineer",
        period: "Oct 2017 - Dec 2018",
        aliases: ["microsys", "technical support"],
        points: [
            "Delivered first-level technical support for application installation, configuration, and basic networking.",
            "Conducted end-user training sessions on a mechanical-industry billing application.",
            "This role marked the beginning of his professional journey before transitioning to software development."
        ]
    }
];

const projectData = [
    {
        title: "Warehouse Management System (WMS)",
        aliases: ["wms", "warehouse", "logistics", "inventory", "qr tracking"],
        desc: "an enterprise-grade IIoT solution for Panasonic that manages inventory, storage IN/OUT, quality inspection, and BOM modules.",
        tech: "React.js, TypeScript, Material UI, integrated with IIoT hardware and REST APIs",
        highlights: [
            "Led frontend delivery for Inventory, Storage IN/OUT, Quality Inspection, and BOM modules.",
            "Implemented QR-based tracking and CSV bulk upload workflows.",
            "Built real-time dashboards for multi-warehouse inventory visibility.",
            "Implemented role-based access control (RBAC) at the UI level."
        ]
    },
    {
        title: "Stock Automation Platform",
        aliases: ["stock", "trading", "automation", "finance", "cron"],
        desc: "a high-frequency automated trading system featuring real-time buy/sell execution and Cron-based background jobs.",
        tech: "MERN Stack (MongoDB, Express, React, Node.js), Python, PostgreSQL, Socket.io for real-time updates",
        highlights: [
            "Developed automated stock trading workflows integrated with broker APIs.",
            "Implemented real-time buy/sell automation and Cron-based background jobs.",
            "Built comprehensive monitoring dashboards for trading activity."
        ]
    },
    {
        title: "IIoT Monitoring Dashboard",
        aliases: ["iiot", "monitoring", "dashboard", "analytics", "machine health", "production"],
        desc: "a comprehensive data visualization platform for tracking machine health, production metrics, and shift management in real-time, with Role-Based Access Control (RBAC).",
        tech: "Vue.js, Node.js, charting libraries (MEVN Stack)",
        highlights: [
            "Developed data visualization dashboard for machine health and performance trends.",
            "Implemented User Management with role-based access control (RBAC).",
            "Developed Shift Management and Production Planning modules."
        ]
    },
    {
        title: "QR Layout Designer & Libraries",
        aliases: ["qr", "qrlayout", "qrlayout-core", "qrlayout-ui", "npm library", "open source project", "layout designer"],
        desc: "an open-source suite of NPM tools for designing and printing QR labels. Includes qrlayout-core (logic library) and qrlayout-ui (framework-agnostic UI components).",
        tech: "TypeScript, JavaScript, React, framework-agnostic design",
        highlights: [
            "Published qrlayout-core to NPM: https://www.npmjs.com/package/qrlayout-core",
            "Published qrlayout-ui to NPM: https://www.npmjs.com/package/qrlayout-ui",
            "Built a comprehensive demo app: https://qr-layout-designer.netlify.app/"
        ]
    },
    {
        title: "E-Commerce Application",
        aliases: ["ecommerce", "e-commerce", "shopping", "cart", "product"],
        desc: "a responsive e-commerce platform with product catalog, filtering, and shopping cart functionality.",
        tech: "React.js, Bootstrap, JavaScript",
        highlights: [
            "Built responsive UI using Bootstrap and custom CSS.",
            "Implemented product filtering, search, and cart functionality.",
            "Optimized for performance and mobile devices."
        ]
    },
    {
        title: "HR Management System (HRMS)",
        aliases: ["hrms", "hr", "human resource", "payroll", "attendance", "employee management"],
        desc: "a comprehensive HR solution for employee management, payroll processing, and attendance tracking with secure authentication.",
        tech: "React.js, Bootstrap, Node.js, Express, MongoDB",
        highlights: [
            "Developed comprehensive employee management modules.",
            "Built backend for payroll processing and attendance tracking.",
            "Implemented secure authentication and role-based access."
        ]
    }
];

const openSourceData = [
    {
        name: "qrlayout-core",
        aliases: ["qrlayout-core", "core library", "qr core"],
        desc: "A powerful core logic library for QR layout generation, handling complex calculations for sizing and positioning.",
        url: "https://www.npmjs.com/package/qrlayout-core",
        stats: "2,700+ downloads"
    },
    {
        name: "qrlayout-ui",
        aliases: ["qrlayout-ui", "ui library", "qr ui"],
        desc: "A framework-agnostic UI component library for qrlayout-core. Works seamlessly with React, Vue, Angular, or Vanilla JS.",
        url: "https://www.npmjs.com/package/qrlayout-ui",
        stats: "1,800+ downloads"
    },
    {
        name: "env-drift-check",
        aliases: ["env-drift-check", "envwise", "env cli", "dotenv check", "environment check"],
        desc: "A CLI tool to detect drift between .env.example / .env.template and your actual .env files, ensuring environment consistency across teams.",
        url: "https://www.npmjs.com/package/env-drift-check",
        stats: "1,600+ downloads"
    }
];

const skillsData = {
    frontend: ["React.js", "Nuxt.js", "Vue.js", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3", "Material UI", "Vuetify", "Bootstrap"],
    backend: ["Node.js", "Express.js", "RESTful APIs"],
    database: ["MongoDB", "PostgreSQL", "Cron Jobs", "Deployment", "DevOps Basics"],
    tools: ["Git/GitHub", "Postman", "VS Code", "Performance Optimization", "Scalable Architecture", "RBAC"]
};

const educationData = [
    {
        degree: "B.E. in Electronics and Communication Engineering",
        school: "BLDEA's College of Engineering and Technology, Bijapur",
        year: "2017"
    },
    {
        degree: "PUC (Higher Secondary Education)",
        school: "SNJPNM'S PU Science College, Nidasoshi",
        year: "2013"
    },
    {
        degree: "SSLC (Secondary Education)",
        school: "Rani Channamma High School, Hukkeri",
        year: "2011"
    }
];

// ── Unique ID generator ────────────────────────────────────────────────────────
let msgIdCounter = 0;
const nextMsgId = () => (++msgIdCounter).toString();

// ── Inline markdown renderer ───────────────────────────────────────────────────
function renderMarkdown(text: string) {
    const parts: React.ReactNode[] = [];
    const regex = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g;
    let lastIndex = 0;
    let key = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        if (match[1] !== undefined) {
            parts.push(<strong key={key++} className="font-semibold text-white">{match[1]}</strong>);
        } else if (match[2] !== undefined) {
            parts.push(<em key={key++}>{match[2]}</em>);
        } else if (match[3] !== undefined) {
            parts.push(
                <a key={key++} href={match[4]} target="_blank" rel="noopener noreferrer"
                   className="text-[#FFB020] underline hover:text-[#ffc352]">
                    {match[3]}
                </a>
            );
        }
        lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }
    return parts;
}

// ── Response generator (outside component — uses only module-level data) ───────
function generateResponse(input: string): string {
    const lowerInput = input.toLowerCase();

    // ── Greetings ──────────────────────────────────────────────────────
    if (lowerInput.match(/^(hi|hello|hey|greetings|howdy|sup|yo)[\s!?]*$/)) {
        return "Hello! Great to have you here. I can tell you about Hasnain's WMS expertise, his open-source packages, or his full work history. What would you like to know?";
    }

    // ── Identity ───────────────────────────────────────────────────────
    if (lowerInput.includes('who are you') || lowerInput.includes('your name') || lowerInput.includes('about yourself') || lowerInput.includes('intro')) {
        return "I'm Hasnain's AI Portfolio Assistant! I can help you explore his 4+ years of professional experience, technical skills, projects, open-source contributions, and education. Try asking: 'What is your tech stack?', 'Tell me about WMS', or 'What open source packages have you built?'";
    }

    // ── About / Bio ────────────────────────────────────────────────────
    if (lowerInput.includes('about') && (lowerInput.includes('hasnain') || lowerInput.includes('you') || lowerInput.includes('yourself'))) {
        return "Hasnain is a **Software Engineer II** with 4+ years of experience building scalable, enterprise-grade web applications. He currently leads frontend delivery for the Panasonic WMS. His journey began in technical support before transitioning into full-stack development. He is also an active open-source contributor, having published **qrlayout-core**, **qrlayout-ui**, and **env-drift-check** on NPM.";
    }

    // ── Open Source ────────────────────────────────────────────────────
    if (lowerInput.includes('open source') || lowerInput.includes('npm') || lowerInput.includes('package') || lowerInput.includes('library') || lowerInput.includes('publish')) {
        for (const pkg of openSourceData) {
            if (pkg.aliases.some(a => lowerInput.includes(a))) {
                return `**${pkg.name}**: ${pkg.desc} It has ${pkg.stats}. You can find it at: ${pkg.url}`;
            }
        }
        const pkgList = openSourceData.map(p => `**${p.name}** (${p.stats})`).join(', ');
        return `Hasnain has published 3 open-source NPM packages: ${pkgList}. Ask about any one of them to learn more!`;
    }

    // ── Specific Package ───────────────────────────────────────────────
    for (const pkg of openSourceData) {
        if (pkg.aliases.some(a => lowerInput.includes(a))) {
            return `**${pkg.name}**: ${pkg.desc} It has ${pkg.stats}. Check it out at: ${pkg.url}`;
        }
    }

    // ── Specific Company / Experience ──────────────────────────────────
    for (const exp of experienceData) {
        if (exp.aliases.some(alias => lowerInput.includes(alias))) {
            return `At **${exp.company}** as *${exp.role}* (${exp.period}): ${exp.points.join(" ")}`;
        }
    }

    // ── Specific Project ───────────────────────────────────────────────
    for (const proj of projectData) {
        if (proj.aliases.some(alias => lowerInput.includes(alias))) {
            return `**${proj.title}** is ${proj.desc} Built using: ${proj.tech}. Key highlights: ${proj.highlights.join(" | ")}`;
        }
    }

    // ── Broad: Experience / Career ─────────────────────────────────────
    if (lowerInput.includes('experience') || lowerInput.includes('history') || lowerInput.includes('career') || lowerInput.includes('work') || lowerInput.includes('job') || lowerInput.includes('background')) {
        return "Hasnain has **4+ years** in software development. His career: **Software Engineer II** at Cymbeline Innovation (Feb 2025–Present) → **Software Engineer I** at Cymbeline (Feb 2024–Jan 2025) → **Software Developer** at Flyers Soft (2023–2024) → **Software Developer** at Triofi Technologies (2021–2022). Before that, he was an **Assistant Team Lead** at Vindhya e-infomedia (2019–2020) and a **Technical Support Engineer** at Microsys (2017–2018).";
    }

    // ── Broad: Projects ────────────────────────────────────────────────
    if (lowerInput.includes('project') || lowerInput.includes('built') || lowerInput.includes('portfolio') || lowerInput.includes('case study') || lowerInput.includes('work sample')) {
        return "Hasnain has built 6 major projects: 1) **Warehouse Management System (WMS)** – enterprise IIoT solution for Panasonic, 2) **Stock Automation Platform** – real-time trading system, 3) **IIoT Monitoring Dashboard** – machine health analytics, 4) **QR Layout Designer & Libraries** – open-source NPM tools, 5) **E-Commerce Application** – responsive shopping platform, 6) **HR Management System (HRMS)** – employee & payroll management. Which one would you like to explore?";
    }

    // ── Skills / Tech Stack ────────────────────────────────────────────
    if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('stack') || lowerInput.includes('language') || lowerInput.includes('framework') || lowerInput.includes('tool')) {
        return `Hasnain's full tech stack: **Frontend**: ${skillsData.frontend.join(', ')} | **Backend & APIs**: ${skillsData.backend.join(', ')} | **Database & Cloud**: ${skillsData.database.join(', ')} | **Tools & Concepts**: ${skillsData.tools.join(', ')}`;
    }

    // ── Specific skill queries ─────────────────────────────────────────
    if (lowerInput.includes('react')) return "Hasnain has **4+ years** of React.js experience, building enterprise WMS modules, trading dashboards, and e-commerce platforms. He uses TypeScript and Material UI for type-safe, scalable interfaces.";
    if (lowerInput.includes('vue') || lowerInput.includes('nuxt')) return "Hasnain has worked with **Vue.js** (for the IIoT Monitoring Dashboard) and **Nuxt.js** (at Flyers Soft for SSR web applications). He also used Vuetify as a UI library.";
    if (lowerInput.includes('python') || lowerInput.includes('fastapi')) return "Hasnain works with **Python** and FastAPI for backend development, used in the Stock Automation Platform alongside Node.js and PostgreSQL.";
    if (lowerInput.includes('node') || lowerInput.includes('express')) return "Hasnain builds REST APIs with **Node.js** and **Express.js**, used across WMS, Stock Automation, HRMS, and other projects. He is comfortable with both JavaScript and TypeScript in the backend.";
    if (lowerInput.includes('mongodb') || lowerInput.includes('database') || lowerInput.includes('postgresql')) return "Hasnain works with **MongoDB** (used in WMS, Stock, HRMS projects) and **PostgreSQL** (used in the Stock Automation Platform). He designs schemas and integrates REST APIs with databases.";
    if (lowerInput.includes('typescript')) return "**TypeScript** is one of Hasnain's primary languages. He uses it for type-safe frontend development (React + MUI) and backend APIs (Node.js + Express), ensuring maintainable, scalable code.";

    // ── Education ──────────────────────────────────────────────────────
    if (lowerInput.includes('education') || lowerInput.includes('degree') || lowerInput.includes('college') || lowerInput.includes('university') || lowerInput.includes('study') || lowerInput.includes('qualification')) {
        const eduList = educationData.map(e => `**${e.degree}** from ${e.school} (${e.year})`).join(' | ');
        return `Hasnain's education: ${eduList}. His engineering background in Electronics & Communication laid the foundation for his transition into software development.`;
    }

    // ── Contact / Hire ─────────────────────────────────────────────────
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire') || lowerInput.includes('reach') || lowerInput.includes('call') || lowerInput.includes('available')) {
        return "Hasnain is open to new opportunities! You can reach him via the Contact section on this portfolio, connect on LinkedIn: linkedin.com/in/hasnain-hamid-abb5b512a, or check his GitHub: github.com/hasnainhamid";
    }

    // ── Resume / CV ────────────────────────────────────────────────────
    if (lowerInput.includes('resume') || lowerInput.includes('cv') || lowerInput.includes('download')) {
        return "You can download Hasnain's latest resume from the navigation bar or the Contact section of this portfolio.";
    }

    // ── Social Links ───────────────────────────────────────────────────
    if (lowerInput.includes('github') || lowerInput.includes('linkedin') || lowerInput.includes('npmjs') || lowerInput.includes('social') || lowerInput.includes('profile')) {
        return "Find Hasnain online: **GitHub** → github.com/hasnainhamid | **LinkedIn** → linkedin.com/in/hasnain-hamid-abb5b512a | **NPM** → npmjs.com/~hasnainhamid";
    }

    // ── Why Hire ───────────────────────────────────────────────────────
    if (lowerInput.includes('why hire') || lowerInput.includes('strength') || lowerInput.includes('value') || lowerInput.includes('best at') || lowerInput.includes('why you')) {
        return "You should hire Hasnain because he brings a rare blend of **architectural vision** and hands-on execution. He doesn't just write code — he builds scalable, maintainable systems that drive business value, from leading enterprise WMS projects to publishing open-source tools used by the community. He's also a strong team player and mentor.";
    }

    // ── Default fallback ───────────────────────────────────────────────
    return "I'm still learning! Try asking about 'Experience', 'Projects', 'Tech Stack', 'Open Source', 'Education', or something specific like 'Tell me about the WMS project' or 'What is qrlayout-ui?'";
}

// ── Component ──────────────────────────────────────────────────────────────────

const PortfolioAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowGreeting(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isOpen) setShowGreeting(false);
    }, [isOpen]);

    const [messages, setMessages] = useState<Message[]>([
        {
            id: nextMsgId(),
            type: 'bot',
            text: "Hi there! I'm Hasnain's AI Assistant. Ask me anything about his WMS expertise, React/Next.js skills, open-source packages, or professional background!",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
        };
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const sendMessage = (text: string) => {
        if (!text.trim() || isTyping) return;

        setMessages(prev => [...prev, {
            id: nextMsgId(),
            type: 'user',
            text,
            timestamp: new Date()
        }]);
        setIsTyping(true);

        typingTimerRef.current = setTimeout(() => {
            setMessages(prev => [...prev, {
                id: nextMsgId(),
                type: 'bot',
                text: generateResponse(text),
                timestamp: new Date()
            }]);
            setIsTyping(false);
            typingTimerRef.current = null;
        }, 1000);
    };

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        sendMessage(inputValue);
        setInputValue('');
    };

    const quickAsks = ["Experience", "Projects", "Skills", "Open Source", "Contact"];

    return (
        <>
            {/* Greeting Bubble */}
            <AnimatePresence>
                {!isOpen && showGreeting && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 max-w-[280px]"
                    >
                        <div className="relative flex items-start gap-3 rounded-2xl rounded-br-sm border border-slate-700/50 bg-slate-800 px-4 py-3 text-slate-200 shadow-xl before:absolute before:bottom-[-6px] before:right-6 before:h-3 before:w-3 before:rotate-45 before:border-b before:border-r before:border-slate-700/50 before:bg-slate-800 before:content-['']">
                            <div className="flex-1">
                                <p className="text-sm font-medium">👋 Hi there! I can help you explore my projects and experience.</p>
                            </div>
                            <button
                                onClick={() => setShowGreeting(false)}
                                className="rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
                            >
                                <X className="h-3 w-3" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-[0_0_20px_rgba(255,176,32,0.45)] transition-all duration-300 ${isOpen ? 'pointer-events-none scale-0 opacity-0' : 'bg-[#FFB020] text-[#0B0D12]'
                    }`}
            >
                <MessageSquare className="h-6 w-6" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-0 right-0 z-50 flex h-[100dvh] w-full flex-col overflow-hidden border-slate-800 bg-[#0E1015] shadow-2xl backdrop-blur-xl sm:bottom-6 sm:right-6 sm:h-[600px] sm:max-h-[85vh] sm:w-[380px] sm:rounded-2xl sm:border"
                        style={{ boxShadow: '0 0 50px -12px rgba(0,0,0,0.6)' }}
                    >
                        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 p-4">
                            <div className="flex items-center gap-3">
                                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#FFB020] to-[#ffd27a]">
                                    <Bot className="h-6 w-6 text-[#0B0D12]" />
                                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0E1015] bg-[#6EE7B7]"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-100">Assistant</h3>
                                    <p className="flex items-center gap-1 text-xs text-[#FFB020]">
                                        <Sparkles className="h-3 w-3" /> Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                                aria-label="Close assistant"
                            >
                                <Minimize2 className="hidden h-5 w-5 sm:block" />
                                <X className="h-5 w-5 sm:hidden" />
                            </button>
                        </div>

                        <div className="scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent flex-1 space-y-4 overflow-y-auto p-4">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl p-3 shadow-sm ${msg.type === 'user'
                                            ? 'rounded-tr-sm bg-[#FFB020] text-[#0B0D12]'
                                            : 'rounded-tl-sm border border-slate-800 bg-slate-900/70 text-slate-200'
                                            }`}
                                    >
                                        <p className="whitespace-pre-wrap text-sm leading-relaxed">
                                            {msg.type === 'bot' ? renderMarkdown(msg.text) : msg.text}
                                        </p>
                                        <span className="mt-1 block px-1 text-[10px] opacity-60">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="flex items-center gap-2 rounded-2xl rounded-tl-sm border border-slate-800 bg-slate-900/70 p-3">
                                        <span className="h-2 w-2 animate-bounce rounded-full bg-[#FFB020]/60"></span>
                                        <span className="h-2 w-2 animate-bounce rounded-full bg-[#FFB020]/60 delay-75"></span>
                                        <span className="h-2 w-2 animate-bounce rounded-full bg-[#FFB020]/60 delay-150"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {messages.length < 4 && !isTyping && (
                            <div className="px-4 pb-2">
                                <p className="mb-2 pl-1 text-xs text-slate-500">Suggested topics:</p>
                                <div className="scrollbar-none flex gap-2 overflow-x-auto pb-2">
                                    {quickAsks.map(qa => (
                                        <button
                                            key={qa}
                                            onClick={() => sendMessage(qa)}
                                            className="whitespace-nowrap rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-[#FFB020]/50 hover:bg-[#FFB020]/10"
                                        >
                                            {qa}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="border-t border-slate-800 bg-slate-900/40 p-4">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="flex-1 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-sm text-slate-200 transition-colors placeholder:text-slate-600 focus:border-[#FFB020]/50 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="rounded-xl bg-[#FFB020] p-2.5 text-[#0B0D12] shadow-lg shadow-[#FFB020]/20 transition-colors hover:bg-[#ffc352] disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default PortfolioAssistant;