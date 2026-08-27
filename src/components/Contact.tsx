"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 1500);
    };

    return (
        <section id="contact" aria-label="Contact Information" className="relative overflow-hidden bg-[#0B0D12] py-24">
            {/* Background decor */}
            <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#FFB020]/10 blur-[110px]" />
            <div className="absolute bottom-0 right-1/4 -z-10 h-64 w-64 rounded-full bg-[#6EE7B7]/10 blur-[100px]" />

            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#FFB020]">Let&apos;s talk</p>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">Get In Touch</h2>
                    <p className="text-lg text-slate-400">
                        I&apos;m currently available for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-12 grid max-w-4xl gap-6 md:grid-cols-3"
                >
                    <div className="group flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition-all hover:border-[#FFB020]/40 hover:bg-slate-900/60">
                        <div className="mb-4 rounded-full bg-[#FFB020]/10 p-4 text-[#FFB020] transition-transform group-hover:scale-110">
                            <Mail className="h-8 w-8" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-slate-200">Email</h3>
                        <a href="mailto:snachart1122@gmail.com" className="break-all text-slate-400 transition-colors hover:text-[#FFB020]">
                            snachart1122@gmail.com
                        </a>
                    </div>

                    <div className="group flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition-all hover:border-[#6EE7B7]/40 hover:bg-slate-900/60">
                        <div className="mb-4 rounded-full bg-[#6EE7B7]/10 p-4 text-[#6EE7B7] transition-transform group-hover:scale-110">
                            <Phone className="h-8 w-8" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-slate-200">Phone</h3>
                        <a href="tel:+923140972575" className="text-slate-400 transition-colors hover:text-[#6EE7B7]">
                            +92 3140972575
                        </a>
                    </div>

                    <div className="group flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition-all hover:border-[#FFB020]/40 hover:bg-slate-900/60">
                        <div className="mb-4 rounded-full bg-[#FFB020]/10 p-4 text-[#FFB020] transition-transform group-hover:scale-110">
                            <MapPin className="h-8 w-8" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-slate-200">Location</h3>
                        <p className="text-slate-400">
                            Pakistan, Islamabad - Bahria Enclave, Phase 7
                        </p>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl"
                >
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
                        <h3 className="mb-6 text-center text-xl font-semibold text-white">Send Me a Message</h3>
                        
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-8 text-center"
                            >
                                <div className="mb-4 rounded-full bg-[#6EE7B7]/10 p-4 text-[#6EE7B7]">
                                    <CheckCircle className="h-12 w-12" />
                                </div>
                                <h4 className="text-xl font-semibold text-white">Message Sent!</h4>
                                <p className="mt-2 text-slate-400">Thanks for reaching out. I'll get back to you soon!</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-[#FFB020] focus:outline-none focus:ring-1 focus:ring-[#FFB020]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-[#FFB020] focus:outline-none focus:ring-1 focus:ring-[#FFB020]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/50 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-[#FFB020] focus:outline-none focus:ring-1 focus:ring-[#FFB020] resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFB020] px-6 py-3.5 font-semibold text-[#0B0D12] transition-all hover:bg-white hover:shadow-lg hover:shadow-[#FFB020]/25 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#0B0D12] border-t-transparent" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;