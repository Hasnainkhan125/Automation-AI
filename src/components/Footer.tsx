"use client";

import { Code2, Github, Linkedin, Package, Mail, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            label: "GitHub Profile — hasnainhamid",
            href: "https://github.com/Hasnainkhan125/Automation-AI/tree/main",
            icon: <Github className="h-5 w-5" aria-hidden="true" />,
            text: "GitHub",
        },
        {
            label: "LinkedIn Profile — Hasnain Hamid",
            href: "https://www.linkedin.com/in/hasnain-hamid-abb5b512a/",
            icon: <Linkedin className="h-5 w-5" aria-hidden="true" />,
            text: "LinkedIn",
        },
  
        {
            label: "Email — hasnainhamid",
            href: "snacahrt1122@gmail.com",
            icon: <Mail className="h-5 w-5" aria-hidden="true" />,
            text: "Email",
        },
    ];

    const footerLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
    ];

    return (
        <footer
            role="contentinfo"
            aria-label="Site footer"
            className="border-t border-slate-800 bg-[#0B0D12] py-12"
        >
            <div className="container mx-auto px-4 md:px-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4">
                    
                    {/* Brand Column */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-0 mb-4">
                            <div className="relative h-12 w-22 rounded-full overflow-hidden ">
                                <Image
                                    src="/logo1.png"
                                    alt="hasnainDev Logo"
                                    fill
                                    className="object-cover brightness-0 invert"
                                />
                            </div>
                            <div>
                                <span className="text-[15px] font-bold text-white">
                                    hasnain<span className="text-[#FFB020]">Devs</span>
                                    <span className="text-[#FFB020]">.</span>
                                </span>
                                <p className="text-[10px] text-slate-500">Full Stack Developer</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 max-w-xs text-center md:text-left">
                            Building scalable web applications and AI-powered solutions for businesses worldwide.
                        </p>
                        <div className="flex gap-3 mt-4">
                            <span className="flex items-center gap-1.5 text-xs text-slate-500">
                                Available for work
                            </span>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FFB020] mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5 text-center md:text-left">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        offset={-100}
                                        className="text-sm text-slate-400 transition-colors hover:text-[#FFB020] cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack Column */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FFB020] mb-4">
                            Tech Stack
                        </h3>
                        <ul className="space-y-2 text-center md:text-left">
                            <li className="text-sm text-slate-400">React.js · Next.js</li>
                            <li className="text-sm text-slate-400">Node.js · Express</li>
                            <li className="text-sm text-slate-400">TypeScript · JavaScript</li>
                            <li className="text-sm text-slate-400">MongoDB · PostgreSQL</li>
                            <li className="text-sm text-slate-400">AWS · Docker</li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FFB020] mb-4">
                            Get in Touch
                        </h3>
                        <ul className="space-y-3 text-center md:text-left">
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Mail className="h-4 w-4 text-[#FFB020]" />
                                <a href="mailto:shashidharnaik8@gmail.com" className="hover:text-[#FFB020] transition-colors">
                                    shashidharnaik8@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <MapPin className="h-4 w-4 text-[#FFB020]" />
                                <span>Pakistan, Islamabad</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-400">
                                <Sparkles className="h-4 w-4 text-[#FFB020]" />
                                <span>Remote · Available</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    {/* Social Links */}
                    <nav aria-label="Social media links" className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.text}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer me"
                                aria-label={link.label}
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 transition-all hover:border-[#FFB020] hover:bg-[#FFB020]/10 hover:text-[#FFB020]"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </nav>

                    {/* Copyright */}
                    <p className="text-center text-sm text-slate-600">
                        <span aria-label={`Copyright ${currentYear} hasnainDevs`}>
                            &copy; {currentYear}{" "}
                            <span className="font-medium text-slate-500 hover:text-[#FFB020] transition-colors">
                                hasnainDevs
                            </span>
                            . All rights reserved.
                        </span>
                    </p>
                </div>

                {/* SEO: Hidden but accessible description for crawlers */}
                <p className="sr-only">
                    Hasnain Hamid is a Full Stack Developer based in Pakistan.
                    Specializing in React, Next.js, Node.js, TypeScript, and enterprise web application development.
                </p>
            </div>
        </footer>
    );
};

export default Footer;