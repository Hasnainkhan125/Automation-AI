"use client";

import { AnimatePresence, motion } from 'framer-motion';
import {
    Briefcase, Download, ExternalLink, FolderGit2,
    GraduationCap, Github, Home, Linkedin, Mail, Menu,
    Package, Send, Sparkles, User, X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll while the mobile sidebar is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', to: 'home', icon: Home },
        { name: 'About', to: 'about', icon: User },
        { name: 'Experience', to: 'experience', icon: Briefcase },
        { name: 'Projects', to: 'projects', icon: FolderGit2 },
        { name: 'Open Source', to: 'opensource', icon: Package },
        { name: 'Education', to: 'education', icon: GraduationCap },
        { name: 'Contact', to: 'contact', icon: Send },
    ];

    const socialLinks = [
        { icon: Github, url: "https://github.com/hasnainhamid", label: "GitHub" },
        { icon: Linkedin, url: "https://www.linkedin.com/in/hasnain-hamid-abb5b512a/", label: "LinkedIn" },
        { icon: Package, url: "https://www.npmjs.com/~hasnainhamid", label: "NPM" },
        { icon: Mail, url: "mailto:shashidharnaik8@gmail.com", label: "Email" },
    ];

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? 'border-b border-slate-800 bg-[#0B0D12] py-3 shadow-lg shadow-black/30'
                    : 'border-b border-transparent bg-[#0B0D12] py-5'
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
                {/* Logo with Image - White Filter */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex cursor-pointer items-center"
                    onClick={() => window.scrollTo(0, 0)}
                    role="link"
                    aria-label="Go to top of page"
                >
                    <div className="relative h-12 w-20 rounded-full overflow-hidden ">
                        <Image
                            src="/logo1.png"
                            alt="hasnainDev Logo"
                            fill
                            className="object-cover brightness-0 invert"
                            priority
                        />
                    </div>
                    <span className="text-[12px] font-bold tracking-tight text-white">
                        hasnain<span className="text-[#FFB020]">Devs</span>
                    <p className="text-[10px] text-slate-500">Full Stack Developer</p>
                    </span>
                </motion.div>

                {/* Desktop Nav - Active Link Background Color */}
                <nav className="hidden gap-1 md:flex" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-100}
                            className="group relative cursor-pointer rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-[#FFB020]/10 hover:text-[#FFB020]"
                            activeClass="bg-[#FFB020]/20 text-[#FFB020]"
                        >
                            {link.name}
                            <span className="absolute bottom-1 left-1/2 h-0.5 w-0 bg-[#FFB020] transition-all duration-300 group-hover:left-0 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA Buttons */}
                <div className="hidden items-center gap-3 md:flex">
                    <a
                        href="/Shashidhar_Naik_2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-[#FFB020] hover:bg-[#FFB020]/10 hover:text-[#FFB020]"
                    >
                        <Download className="h-4 w-4" />
                        Resume
                    </a>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-100}
                        className="group relative overflow-hidden rounded-xl bg-[#FFB020] px-6 py-2.5 text-sm font-semibold text-[#0B0D12] transition-all hover:shadow-lg hover:shadow-[#FFB020]/25"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Let&apos;s Talk
                            <Sparkles className="h-4 w-4" />
                        </span>
                        <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-300 transition-all hover:bg-[#FFB020]/10 hover:text-[#FFB020] md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isOpen}
                    aria-controls="mobile-nav"
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </motion.div>
                </motion.button>
            </div>

            {/* Mobile Sidebar — solid panel, no glass */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-black/70 md:hidden"
                            aria-hidden="true"
                        />
                        <motion.div
                            id="mobile-nav"
                            role="navigation"
                            aria-label="Mobile navigation"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed right-0 top-0 z-40 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto border-l border-slate-800 bg-[#0B0D12] px-6 pt-24 shadow-2xl shadow-black/70 md:hidden"
                        >
                            {/* Profile Section - White Filter */}
                            <div className="mb-6 flex items-center gap-1 border-b border-slate-800 pb-6">
                                <div className="relative h-16 w-26 rounded-full overflow-hidden">
                                    <Image
                                        src="/logo1.png"
                                        alt="hasnainDev Logo"
                                        fill
                                        className="object-cover brightness-0 invert"
                                    />
                                </div>
                                <div>
  <span className="text-1xl font-bold tracking-tight text-white">
                        hasnain<span className="text-[#FFB020]">Devs</span>
                        <span className="text-[#FFB020]">.</span>
                    </span>
                                                    </div>
                            </div>

                            {/* Navigation Links - Active Background Color */}
                            <nav className="flex-1 space-y-1">
                                {navLinks.map((link, i) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 + i * 0.04, type: 'spring', stiffness: 300 }}
                                        >
                                            <Link
                                                to={link.to}
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                offset={-100}
                                                className="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-slate-400 transition-all duration-300 hover:bg-[#FFB020]/10 hover:text-[#FFB020]"
                                                activeClass="bg-[#FFB020]/15 text-[#FFB020]"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <Icon className="h-5 w-5" />
                                                {link.name}
                                                <span className="ml-auto opacity-0 transition-opacity group-hover:opacity-100">
                                                    <ExternalLink className="h-4 w-4 text-[#FFB020]" />
                                                </span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 }}
                                className="flex flex-col gap-3 border-t border-slate-800 pb-6 pt-4"
                            >
                                <a
                                    href="/Shashidhar_Naik_2025.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3.5 text-sm font-medium text-slate-300 transition-all hover:border-[#FFB020] hover:bg-[#FFB020]/10 hover:text-[#FFB020]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Download className="h-4 w-4" />
                                    Download Resume
                                </a>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-100}
                                    className="flex items-center justify-center gap-2 rounded-xl bg-[#FFB020] px-4 py-3.5 text-sm font-semibold text-[#0B0D12] transition-all hover:bg-[#ffc352] hover:shadow-lg hover:shadow-[#FFB020]/25"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Sparkles className="h-4 w-4" />
                                    Let&apos;s Talk
                                </Link>
                            </motion.div>


                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;