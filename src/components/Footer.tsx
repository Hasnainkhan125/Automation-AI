"use client";

import { Code2, Github, Linkedin, Package } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();


    return (
        <footer
            role="contentinfo"
            aria-label="Site footer"
            className="border-t border-slate-800 bg-[#0B0D12] py-10"
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <Code2 className="h-5 w-5 text-[#FFB020]" aria-hidden="true" />
                        <span className="font-bold text-slate-300">
                            hasnainDevs<span className="text-[#FFB020]">.</span>
                        </span>
                    </div>


                    {/* Copyright */}
                    <p className="text-sm text-slate-600">
                        <span aria-label={`Copyright ${currentYear} hasnainDevs`}>
                            &copy; {currentYear}{" "}
                            <span className="font-medium text-slate-500">hasnainDevs</span>
                            . All rights reserved.
                        </span>
                    </p>
                </div>

                {/* SEO: Hidden but accessible description for crawlers */}
                <p className="sr-only">
                    Hasnain Hamid is a Full Stack Developer based in Bangalore, India.
                    Specializing in React, Next.js, Node.js, TypeScript, and enterprise web application development.
                </p>
            </div>
        </footer>
    );
};

export default Footer;