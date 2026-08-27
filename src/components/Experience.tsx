"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronDown, ChevronUp, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";

const Experience = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const jobs = [
        {
            role: "Software Engineer II",
            company: "Cymbeline Innovation Pvt. Ltd (Client: Panasonic)",
            period: "Feb 2025 - Present",
            current: true,
            location: "Remote",
            tech: ["React.js", "TypeScript", "Material UI"],
            points: [
                "Working as Software Engineer II and Frontend Lead on an enterprise Warehouse Management System (WMS).",
                "Own frontend delivery using React.js, TypeScript, and Material UI.",
                "Lead feature planning and execution, ensuring on-time delivery within sprint timelines.",
                "Assign tasks to junior developers based on team lead guidance and feature complexity.",
                "Actively track progress, follow up with team members, and resolve blockers.",
                "Collaborate with business stakeholders to gather requirements, take feedback, and refine workflows.",
                "Conduct technical discussions with team lead and developers to decide optimal UI and architectural approaches.",
                "Develop reusable, scalable UI components improving consistency and maintainability.",
                "Implement role-based access control (RBAC) at the UI level.",
                "Integrate frontend modules with backend REST APIs for inventory, storage IN/OUT, reporting, and dashboards.",
            ],
        },
        {
            role: "Software Engineer I",
            company: "Cymbeline Innovation Pvt. Ltd",
            period: "Feb 2024 - Jan 2025",
            current: false,
            location: "Remote",
            tech: ["React.js", "Node.js", "MongoDB", "Express", "PostgreSQL"],
            points: [
                "Contributed as a Software Engineer I on Stock Automation and early-phase WMS feature development.",
                "Developed frontend modules using React.js, TypeScript, and Material UI.",
                "Implemented UI flows for automated stock trading and monitoring dashboards.",
                "Built and integrated frontend components with backend REST APIs (Node.js, Express, MongoDB).",
                "Worked on initial WMS features including inventory listing, storage workflows, and basic reporting.",
                "Participated in requirement discussions and supported feature planning during early product phases.",
                "Demonstrated strong ownership and consistency, leading to promotion to Software Engineer II.",
            ],
        },
        {
            role: "Software Developer",
            company: "Flyers Soft Pvt. Ltd",
            period: "Jan 2023 - Jan 2024",
            current: false,
            location: "On-site",
            tech: ["React.js", "Nuxt.js", "Vuetify", "Bootstrap"],
            points: [
                "Delivered frontend-heavy features using React.js, Nuxt.js, Vuetify, and Bootstrap.",
                "Developed REST APIs using Node.js, Express.js, and TypeScript.",
                "Participated in sprint planning, estimation, and feature discussions.",
                "Mentored interns and junior developers on JavaScript, Git, and development best practices.",
                "Assisted with deployment and production support on DigitalOcean.",
            ],
        },
        {
            role: "Software Developer",
            company: "Triofi Technologies Pvt. Ltd",
            period: "Dec 2021 - Dec 2022",
            current: false,
            location: "On-site",
            tech: ["React.js", "Node.js", "TypeScript"],
            points: [
                "Developed reusable React components and frontend modules.",
                "Built backend CRUD APIs using Node.js, Express, and TypeScript.",
                "Proposed and implemented UI/UX improvements.",
                "Collaborated with QA and business teams for feature releases.",
                "Joined as Intern (Dec 2021 – Feb 2022); converted to Full-Time Developer based on performance.",
            ],
        },
        {
            role: "Assistant Team Lead",
            company: "Vindhya e-infomedia Pvt Ltd",
            period: "Jan 2019 - Dec 2020",
            current: false,
            location: "On-site",
            tech: ["Networking", "Router Configuration"],
            points: [
                "Coordinated with Level 1 technical support engineers to handle escalated issues beyond their scope of support.",
                "Provided guidance and real-time assistance during complex troubleshooting scenarios.",
                "Onboarded, mentored, and trained junior technical support engineers, improving team readiness and resolution efficiency.",
            ],
        },
        {
            role: "Technical Support Engineer",
            company: "Microsys",
            period: "Oct 2017 - Dec 2018",
            current: false,
            location: "On-site",
            tech: ["Networking", "Router Configuration", "Application Support"],
            points: [
                "Delivered first-level technical support for application installation, configuration, and basic networking issues.",
                "Conducted end-user training sessions on a mechanical-industry billing application, ensuring smooth onboarding and efficient daily operations.",
            ],
        },
    ];

    return (
        <section id="experience" aria-label="Professional Experience" className="relative bg-[#0B0D12] py-24 overflow-hidden">
            {/* Solid background - no gradient */}
            <div className="absolute inset-0 bg-[#0B0D12] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-[#FFB020]" />
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#FFB020]">Track record</p>
                        <span className="h-px w-8 bg-[#FFB020]" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Professional <span className="text-[#FFB020]">Experience</span>
                    </h2>
                    <p className="mt-4 max-w-2xl text-slate-400 text-lg">
                        My journey from technical support to software engineering leadership.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[19px] top-0 h-full w-0.5 bg-gradient-to-b from-[#FFB020] via-[#6EE7B7] to-[#FFB020]/20 md:left-[29px]" />

                    <div className="space-y-6">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                className="relative pl-12 md:pl-16"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[9px] top-6 z-10 md:left-[19px]">
                                    <div className={`relative h-5 w-5 rounded-full border-2 ${job.current ? 'border-[#6EE7B7]' : 'border-[#FFB020]'} bg-[#0B0D12] flex items-center justify-center`}>
                                        {job.current ? (
                                            <>
                                                <div className="h-2 w-2 rounded-full bg-[#6EE7B7]" />
                                                <span className="absolute inset-0 animate-ping rounded-full bg-[#6EE7B7]/50" />
                                            </>
                                        ) : (
                                            <div className="h-2 w-2 rounded-full bg-[#FFB020]" />
                                        )}
                                    </div>
                                </div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className={`group relative rounded-2xl border ${job.current ? 'border-[#6EE7B7]/30 bg-[#6EE7B7]/5' : 'border-slate-800 bg-slate-900/40'} p-6 transition-all duration-300 hover:border-[#FFB020]/40 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-[#FFB020]/5 cursor-pointer`}
                                    onClick={() => toggleExpand(index)}
                                >
                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-2.5">
                                                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-[#FFB020] transition-colors duration-300">
                                                        {job.role}
                                                    </h3>
                                                    {job.current && (
                                                        <span className="inline-flex items-center gap-1 rounded-full bg-[#6EE7B7]/10 px-3 py-0.5 text-xs font-medium text-[#6EE7B7] border border-[#6EE7B7]/20">
                                                            <Sparkles className="h-3 w-3" />
                                                            Current
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-base font-medium text-slate-300 mt-1">
                                                    {job.company}
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-2 whitespace-nowrap">
                                                <span className="flex items-center gap-1.5 rounded-full bg-slate-950/60 px-3 py-1.5 text-xs text-slate-400">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    {job.period}
                                                </span>
                                                {job.location && (
                                                    <span className="flex items-center gap-1.5 rounded-full bg-slate-950/60 px-3 py-1.5 text-xs text-slate-400">
                                                        <MapPin className="h-3.5 w-3.5" />
                                                        {job.location}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Tech tags */}
                                        <div className="mb-4 flex flex-wrap gap-2">
                                            {job.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="rounded-full border border-slate-700 bg-slate-950/40 px-3 py-1 text-xs text-slate-300 transition-colors hover:border-[#FFB020]/50 hover:text-white"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Toggle button */}
                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-[#FFB020]">
                                            {expandedIndex === index ? (
                                                <>
                                                    <ChevronUp className="h-4 w-4" />
                                                    Hide responsibilities
                                                </>
                                            ) : (
                                                <>
                                                    <ChevronDown className="h-4 w-4" />
                                                    View responsibilities
                                                </>
                                            )}
                                        </div>

                                        {/* Expanded content */}
                                        <AnimatePresence>
                                            {expandedIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <ul className="mt-4 space-y-3 border-t border-slate-800 pt-4">
                                                        {job.points.map((point, i) => (
                                                            <motion.li
                                                                key={i}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: i * 0.03 }}
                                                                className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                                                            >
                                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFB020]" />
                                                                <span>{point}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;