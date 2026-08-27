"use client";

import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Bot,
    CheckCircle2,
    Download,
    Github,
    Linkedin,
    Package,
    Webhook,
    Zap,
} from 'lucide-react';
import { Link } from 'react-scroll';

const socialProfiles = [
    { icon: Github, href: 'https://github.com/Hasnainkhan125', label: 'GitHub profile - hasnainhamid' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hasnain-hamid-abb5b512a/', label: 'LinkedIn profile - Hasnain Hamid' },
    { icon: Package, href: 'https://flowgeniuss.netlify.app/', label: 'NPM packages by Hasnain Hamid' },
];

const stack = ['React', 'TypeScript', 'Node.js', 'LangChain', 'PostgreSQL'];

const workflowNodes = [
    { icon: Zap, label: 'New lead', detail: 'Form / CRM webhook' },
    { icon: Bot, label: 'AI agent', detail: 'Qualifies & drafts reply' },
    { icon: Webhook, label: 'Systems sync', detail: 'CRM + inbox updated' },
    { icon: CheckCircle2, label: 'Team notified', detail: 'Slack, in seconds' },
];

const proof = [
    { value: '40+', label: 'workflows automated' },
    { value: '4+ yrs', label: 'shipping production code' },
    { value: 'MERN/MEVN', label: 'core stack' },
];

const Hero = () => {
    return (
        <section id="home" aria-label="Hero - Introduction" className="relative flex min-h-screen items-center overflow-hidden bg-[#0B0D12] pt-28 sm:pt-24 md:pt-28 lg:pt-32">
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
            <div className="pointer-events-none absolute -right-32 top-16 -z-10 h-96 w-96 rounded-full bg-[#FFB020]/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-[#6EE7B7]/10 blur-[110px]" />

            <div className="container mx-auto grid items-center gap-10 px-4 pb-12 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-20 lg:gap-14">
                {/* ===== Left: copy ===== */}
                <motion.div 
                    initial={{ opacity: 0, y: 24 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.7 }}
                    className="text-center md:text-left"
                >
                    <div className="mb-5 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-[#FFB020] md:justify-start">
                        <span className="flex h-2 w-2 animate-pulse rounded-full bg-[#FFB020] shadow-[0_0_14px_rgba(255,176,32,0.8)]" />
                        Automation & AI-agent builds
                    </div>

                    <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                        I Ship AI That
                        <span className="mt-1 block text-slate-500">Drives Revenue</span>
                    </h1>

                    <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg lg:text-xl mx-auto md:mx-0">
                        I&apos;m Hasnain Hamid, a Software Engineer II who designs AI-agent workflows and business automation — turning manual, repetitive processes into systems that run themselves, built on <span className="font-semibold text-[#FFB020]">MERN</span> and <span className="font-semibold text-[#FAFAFA]">MEVN</span>.
                    </p>

                    {/* Buttons - Centered on mobile */}
                    <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:justify-start">
                        <Link 
                            to="projects" 
                            smooth={true} 
                            offset={-100} 
                            className="group flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#FFB020] px-6 py-3.5 font-semibold text-[#0B0D12] transition-colors hover:bg-white"
                        >
                            View selected work
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                        <a 
                            href="/Shashidhar_Naik_2025.pdf" 
                            download 
                            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 font-medium text-slate-300 transition-colors hover:border-[#FFB020] hover:text-[#FFB020]"
                        >
                            <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                            Download resume
                        </a>
                    </div>

                    {/* Social Icons - Centered on mobile */}
                    <div className="flex items-center justify-center gap-3 md:justify-start" role="list" aria-label="Social profiles">
                        {socialProfiles.map(({ icon: Icon, href, label }) => (
                            <a 
                                key={label} 
                                href={href} 
                                target="_blank" 
                                rel="noopener noreferrer me" 
                                aria-label={label} 
                                role="listitem" 
                                className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-slate-400 transition-all hover:border-[#FFB020]/60 hover:bg-[#FFB020]/10 hover:text-[#FFB020]"
                            >
                                <Icon aria-hidden="true" className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </motion.div>

              {/* ===== Right: signature element — live agent workflow ===== */}
<motion.div 
    initial={{ opacity: 0, y: 24 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.7, delay: 0.15 }} 
    className="relative mt-6 md:mt-0 w-full"
>
    <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-black/10 shadow-2xl backdrop-blur-[1px]">
        {/* Header - Fully Responsive */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 gap-1.5 sm:gap-2">
            <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs text-slate-400 w-full sm:w-auto">
                <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#FFB020]" />
                <span className="truncate max-w-[140px] sm:max-w-none">agent-workflow / lead-intake</span>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-[#FFB020]/10 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium text-[#FFB020] whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFB020]" />
                Running
            </span>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 md:p-5 lg:p-7">
            <p className="mb-4 sm:mb-5 md:mb-6 text-center sm:text-left font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-slate-500">
                What ships on day one
            </p>

            {/* Pipeline - Responsive Grid */}
            <div className="relative mb-6 sm:mb-7 md:mb-8">
                <div className="absolute left-3 right-3 sm:left-4 sm:right-4 top-4 sm:top-5 h-px bg-slate-800" />
                <motion.div
                    className="absolute top-4 sm:top-5 z-10 h-1.5 w-1.5 sm:h-2 sm:w-2 -translate-y-1/2 rounded-full bg-[#FFB020] shadow-[0_0_10px_rgba(255,176,32,0.9)]"
                    style={{ left: '16px' }}
                    animate={{ left: ['16px', 'calc(100% - 24px)'] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
                />
                
                {/* Mobile: 2 cols, Tablet: 4 cols */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 md:gap-0">
                    {workflowNodes.map(({ icon: Icon, label, detail }, i) => (
                        <div key={label} className="flex flex-col items-center text-center px-1">
                            <motion.div
                                className="mb-1.5 sm:mb-2 flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-[#FFB020]"
                                animate={{ scale: [1, 1.12, 1] }}
                                transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.75, ease: 'easeInOut' }}
                            >
                                <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                            </motion.div>
                            <p className="text-[10px] sm:text-xs font-semibold text-white leading-tight">{label}</p>
                            <p className="mt-0.5 hidden sm:block text-[10px] md:text-[11px] leading-tight text-slate-500">{detail}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats - Responsive Grid */}
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-slate-800 bg-slate-800">
                {proof.map(({ value, label }) => (
                    <div key={label} className="bg-slate-950/70 p-2 sm:p-3 md:p-4 text-center">
                        <p className="text-sm sm:text-base md:text-lg font-semibold text-white">{value}</p>
                        <p className="mt-0.5 text-[9px] sm:text-[10px] md:text-[11px] leading-tight text-slate-500">{label}</p>
                    </div>
                ))}
            </div>

            {/* Tech Stack - Responsive */}
            <div className="mt-3 sm:mt-4 md:mt-5 flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-xs text-slate-400">
                {stack.map((skill) => (
                    <span key={skill} className="border border-slate-800 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-md">
                        {skill}
                    </span>
                ))}
            </div>
        </div>

        {/* Bottom Gradient Bar */}
        <div className="h-1 w-2/3 bg-gradient-to-r from-[#FFB020] via-[#FFB020] to-transparent" />
    </div>
    
    {/* Decorative Corner */}
    <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 -z-10 h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-24 border-b border-l border-[#FFB020]/40" />
</motion.div>
            </div>
        </section>
    );
};

export default Hero;