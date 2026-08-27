"use client";

import { motion } from 'framer-motion';
import { Award, Calendar, GraduationCap } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "B.E. (Electronics and Communication Engineering)",
            school: "BLDEA's College of Engineering and Technology, Bijapur",
            year: "2018",
            score: "",
            details: "Specialized in Electronics and Communication."
        },
        {
            degree: "PUC (Higher Secondary Education)",
            school: "SNJPNM'S PU Science College, Nidasoshi",
            year: "2022",
            score: "",
            details: "Focus on Science curriculum."
        },
        {
            degree: "SSLC (Secondary Education)",
            school: "Rani Channamma High School, Hukkeri",
            year: "2025",
            score: "",
            details: "High academic performance."
        }
    ];

    return (
        <section id="education" aria-label="Academic Background" className="relative bg-[#0B0D12] py-24">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#FFB020]">Background</p>
                    <h2 className="mb-5 flex items-center justify-center gap-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        <GraduationCap className="h-9 w-9 text-[#FFB020]" />
                        Education
                    </h2>
                    <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#FFB020] to-[#FFB020]" />
                </motion.div>

                <div className="mx-auto max-w-4xl space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-start gap-6 rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-colors hover:border-[#FFB020]/30 md:flex-row md:items-center"
                        >
                            <div className="flex-shrink-0 rounded-lg bg-[#FFB020]/10 p-4">
                                <Award className="h-8 w-8 text-[#FFB020]" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="mb-1 text-xl font-bold text-slate-100">{edu.degree}</h3>
                                <p className="mb-2 font-medium text-[#FFB020]">{edu.school}</p>
                                <p className="text-sm text-slate-400">{edu.details}</p>
                            </div>
                            <div className="flex flex-shrink-0 items-center gap-2 rounded-full border border-slate-800 bg-slate-950/60 px-4 py-2 text-slate-500">
                                <Calendar className="h-4 w-4 text-[#FFB020]" />
                                <span>{edu.year}</span>
                                {edu.score && (
                                    <>
                                        <span className="mx-2 h-4 w-px bg-slate-700" />
                                        <span className="font-bold text-[#FFB020]">{edu.score}</span>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;