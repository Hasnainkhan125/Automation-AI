"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Tag, X, Globe, ArrowUpRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface Project {
    title: string;
    role: string;
    desc: string;
    fullDesc?: string[];
    tags: string[];
    links?: { label: string; url: string; icon?: React.ReactNode }[];
    gradient?: string;
    image?: string;
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            title: "Warehouse Management System (WMS)",
            role: "Frontend Lead",
            desc: "Enterprise IIoT solution for managing inventory, storage, and quality inspection.",
            fullDesc: [
                "Led frontend delivery for Inventory, Storage IN/OUT, Quality Inspection, and BOM modules.",
                "Implemented QR-based tracking and CSV bulk upload workflows.",
                "Built real-time dashboards for multi-warehouse inventory visibility.",
                "Coordinated with business teams and developers for optimal feature delivery.",
                "Integrated frontend modules with backend REST APIs."
            ],
            tags: ["React", "Material UI", "IIoT", "Enterprise"],
            gradient: "from-blue-900/20 to-cyan-900/20",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D"
        },
        {
            title: "Stock Automation Platform",
            role: "Full Stack Developer",
            desc: "Automated trading value-added system with real-time buy/sell execution.",
            fullDesc: [
                "Developed automated stock trading workflows integrated with broker APIs.",
                "Implemented real-time buy/sell automation and Cron-based background jobs.",
                "Built and integrated frontend components with backend REST APIs."
            ],
            tags: ["MERN Stack", "Cron Jobs", "Real-time"],
            gradient: "from-green-900/20 to-emerald-900/20",
            image: "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYnNpdGVzJTIwZGVzaW5nfGVufDB8fDB8fHww"
        },
        {
            title: "IIoT Monitoring Dashboard",
            role: "MEVN Stack Developer",
            desc: "Data visualization platform for machine health and production metrics.",
            fullDesc: [
                "Developed data visualization dashboard to monitor machine health, performance trends, and production metrics.",
                "Enabled real-time insights for management and engineers to support informed decision-making.",
                "Implemented User Management with role-based access control (RBAC).",
                "Developed Shift Management and Production Planning modules."
            ],
            tags: ["Vue.js", "Node.js", "Charts", "Analytics"],
            gradient: "from-purple-900/20 to-pink-900/20",
            image: "https://images.unsplash.com/photo-1648134859175-78b41b4db186?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGVzJTIwZGVzaW5nfGVufDB8fDB8fHww"
        },
        {
            title: "QR Layout Designer & Libraries",
            role: "Open Source Contributor",
            desc: "A suite of tools for designing and printing QR labels.",
            fullDesc: [
                "Developed `qrlayout-core`: A core logic library for QR layout generation.",
                "Developed `qrlayout-ui`: A UI component library for the designer.",
                "Built a comprehensive demo application to showcase the libraries."
            ],
            tags: ["Open Source", "NPM", "React", "TypeScript"],
            gradient: "from-orange-900/20 to-amber-900/20",
            image: "https://images.unsplash.com/photo-1648134859186-a05fb609f41e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGVzJTIwZGVzaW5nfGVufDB8fDB8fHww",
            links: [
                { label: "qrlayout-core", url: "https://www.npmjs.com/package/qrlayout-core" },
                { label: "qrlayout-ui", url: "https://www.npmjs.com/package/qrlayout-ui" },
                { label: "Demo App", url: "https://qr-layout-designer.netlify.app/" }
            ]
        },
        {
            title: "E-Commerce Application",
            role: "Frontend Developer",
            desc: "Responsive e-commerce platform with product catalog and shopping cart.",
            fullDesc: [
                "Built responsive UI using Bootstrap and custom CSS.",
                "Implemented product filtering, search, and cart functionality.",
                "Optimized for performance and mobile devices."
            ],
            tags: ["React.js", "Bootstrap", "JavaScript"],
            gradient: "from-red-900/20 to-rose-900/20",
            image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXMlMjBkZXNpbmd8ZW58MHx8MHx8fDA%3D"
        },
        {
            title: "HR Management System (HRMS)",
            role: "Full Stack Developer",
            desc: "Comprehensive HR solution for employee management and payroll.",
            fullDesc: [
                "Developed comprehensive employee management modules.",
                "Built backend for payroll processing and attendance tracking.",
                "Implemented secure authentication and role-based access."
            ],
            tags: ["React.js", "Bootstrap", "Node.js", "Express", "MongoDB"],
            gradient: "from-indigo-900/20 to-violet-900/20",
            image: "https://images.unsplash.com/photo-1760008486593-a85315610136?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnNpdGVzJTIwZGVzaW5nfGVufDB8fDB8fHww"
        },
    ];

    return (
        <section id="projects" aria-label="Featured Software Projects" className="relative bg-[#0B0D12] py-24 overflow-hidden">
            {/* Solid background - no gradient */}
            <div className="absolute inset-0 bg-[#0B0D12] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-[#FFB020]" />
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#FFB020]">Selected work</p>
                        <span className="h-px w-8 bg-[#FFB020]" />
                    </div>
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Featured <span className="text-[#FFB020]">Projects</span>
                    </h2>
                    <p className="max-w-2xl text-slate-400 text-lg">
                        A selection of complex enterprise applications and systems I&apos;ve engineered.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            whileHover={{ y: -8 }}
                            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-black/10 transition-all duration-300 hover:border-[#FFB020]/40 hover:shadow-2xl hover:shadow-[#FFB020]/5"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header with Image */}
                                <div className="relative h-48 overflow-hidden bg-black/30">
                                    {project.image ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-[#0B0D12]/60 to-transparent" />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950" />
                                    )}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                                        <div className="mb-3 flex items-center justify-center gap-2">
                                            <span className="rounded-full bg-[#FFB020]/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-[#FFB020] border border-[#FFB020]/30">
                                                {project.role}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-[#FFB020] transition-colors duration-300 text-center drop-shadow-lg">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="flex flex-col flex-grow p-6">
                                    <p className="mb-6 text-sm leading-relaxed text-slate-400 line-clamp-2">
                                        {project.desc}
                                    </p>

                                    {/* Tags */}
                                    <div className="mb-6 mt-auto flex flex-wrap gap-2">
                                        {project.tags.slice(0, 4).map((tag, i) => (
                                            <span key={i} className="flex items-center gap-1 rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs text-slate-300">
                                                <Tag className="h-3 w-3 text-[#6EE7B7]" />
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 4 && (
                                            <span className="text-xs text-slate-500">+{project.tags.length - 4}</span>
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <div className="mt-2 flex gap-3">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#FFB020] py-2.5 text-sm font-semibold text-[#0B0D12] transition-all hover:bg-[#FFB020]/90 hover:shadow-lg hover:shadow-[#FFB020]/25 active:scale-95"
                                        >
                                            View Details
                                            <ArrowUpRight className="h-4 w-4" />
                                        </button>
                                        
                                        {project.links && project.links.length > 0 && (
                                            <a
                                                href={project.links[0].url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm text-slate-300 transition-all hover:border-[#6EE7B7] hover:bg-[#6EE7B7]/10 hover:text-[#6EE7B7] active:scale-95"
                                            >
                                                <Globe className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-[#0E1015] p-6 shadow-2xl shadow-black/70 md:p-8 scrollbar-thin scrollbar-thumb-slate-700"
                        >
                            {/* Image at top of modal */}
                            {selectedProject.image && (
                                <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] to-transparent" />
                                </div>
                            )}

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-4 top-4 rounded-full bg-slate-800/80 p-2 transition-colors hover:bg-slate-700 hover:scale-110 active:scale-95 z-10"
                            >
                                <X className="h-5 w-5 text-slate-400" />
                            </button>

                            {/* Header */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="rounded-full bg-[#FFB020]/10 px-3 py-1 text-xs font-medium text-[#FFB020]">
                                        {selectedProject.role}
                                    </span>
                                    {selectedProject.links && (
                                        <span className="rounded-full bg-[#6EE7B7]/10 px-3 py-1 text-xs font-medium text-[#6EE7B7]">
                                            <Sparkles className="inline h-3 w-3 mr-1" />
                                            Live
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                            </div>

                            {/* Description */}
                            <div className="mb-8 space-y-4">
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                                    <span className="h-px w-6 bg-[#FFB020]" />
                                    Key Responsibilities & Features
                                </h4>
                                <ul className="space-y-3">
                                    {selectedProject.fullDesc?.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-start gap-3 text-slate-300"
                                        >
                                            <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#FFB020]" />
                                            <span className="leading-relaxed">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                                    <span className="h-px w-6 bg-[#6EE7B7]" />
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tags.map((tag, i) => (
                                        <span key={i} className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1.5 text-sm text-slate-300 transition-colors hover:border-[#FFB020]/50 hover:text-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            {selectedProject.links && (
                                <div className="mt-8 space-y-4 border-t border-slate-800 pt-6">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Links</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 rounded-xl border border-[#FFB020]/25 bg-[#FFB020]/10 px-4 py-2.5 text-sm font-medium text-[#FFB020] transition-all hover:border-[#FFB020]/50 hover:bg-[#FFB020]/20 hover:shadow-lg hover:shadow-[#FFB020]/10 active:scale-95"
                                            >
                                                {link.label}
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;