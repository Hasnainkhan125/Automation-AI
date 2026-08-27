"use client";

import { motion } from 'framer-motion';
import { Download, ExternalLink, Package, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PackageStat {
    downloads: string;
    stars: string;
}

const OpenSource = () => {
    const packages = [
        {
            name: "qrlayout-core",
            desc: "A powerful core logic library for QR layout generation, handling the complex calculations for sizing and positioning.",
            url: "https://www.npmjs.com/package/qrlayout-core",
            tags: ["TypeScript", "QR Code", "Layout Engine"],
            created: "2025-12-31",
            repo: "shashi089/qr-code-layout-generate-tool",
            defaultStats: { downloads: "2,366", stars: "29" }
        },
        {
            name: "qrlayout-ui",
            desc: "Framework-agnostic UI component library for qrlayout-core. Works seamlessly with React, Vue, Angular, or vanilla JavaScript.",
            url: "https://www.npmjs.com/package/qrlayout-ui",
            tags: ["JavaScript", "Framework Agnostic", "UI Components"],
            created: "2026-01-08",
            repo: "shashi089/qr-code-layout-generate-tool",
            defaultStats: { downloads: "1,474", stars: "29" }
        },
        {
            name: "env-drift-check",
            desc: "A CLI tool to detect drift between .env.example / .env.template and your actual .env files, ensuring environment consistency.",
            url: "https://www.npmjs.com/package/env-drift-check",
            tags: ["CLI", "DevOps", "Config"],
            created: "2026-01-27",
            repo: "shashi089/env-drift-check",
            defaultStats: { downloads: "1,338", stars: "14" }
        }
    ];

    const [stats, setStats] = useState<Record<string, PackageStat>>({
        "qrlayout-core": { downloads: "2,366", stars: "29" },
        "qrlayout-ui": { downloads: "1,474", stars: "29" },
        "env-drift-check": { downloads: "1,338", stars: "14" }
    });

    useEffect(() => {
        const fetchStats = async () => {
            const today = new Date().toISOString().split('T')[0];

            const getChunks = (startDateStr: string, endDateStr: string) => {
                const start = new Date(startDateStr);
                const end = new Date(endDateStr);
                const chunks = [];
                let currentStart = new Date(start);
                while (currentStart < end) {
                    const currentEnd = new Date(currentStart);
                    currentEnd.setFullYear(currentEnd.getFullYear() + 1);
                    if (currentEnd > end) {
                        chunks.push({
                            start: currentStart.toISOString().split('T')[0],
                            end: end.toISOString().split('T')[0]
                        });
                        break;
                    } else {
                        chunks.push({
                            start: currentStart.toISOString().split('T')[0],
                            end: currentEnd.toISOString().split('T')[0]
                        });
                        currentStart = new Date(currentEnd);
                        currentStart.setDate(currentStart.getDate() + 1);
                    }
                }
                return chunks;
            };

            const updatedStats = { ...stats };
            let hasChanges = false;

            // Fetch GitHub stars in parallel
            const repoStarsMap: Record<string, string> = {};
            const uniqueRepos = Array.from(new Set(packages.map(pkg => pkg.repo)));
            await Promise.all(uniqueRepos.map(async (repo) => {
                try {
                    const response = await fetch(`https://api.github.com/repos/${repo}`);
                    const data = await response.json();
                    if (data.stargazers_count !== undefined) {
                        repoStarsMap[repo] = String(data.stargazers_count);
                    }
                } catch (error) {
                    console.error(`Error fetching GitHub stars for ${repo}:`, error);
                }
            }));

            // Fetch NPM downloads in parallel
            await Promise.all(packages.map(async (pkg) => {
                try {
                    const chunks = getChunks(pkg.created, today);
                    const results = await Promise.all(chunks.map(chunk =>
                        fetch(`https://api.npmjs.org/downloads/point/${chunk.start}:${chunk.end}/${pkg.name}`)
                            .then(r => r.json())
                    ));
                    const totalDownloads = results.reduce((sum, r) => sum + (r.downloads || 0), 0);

                    let newDownloads = stats[pkg.name]?.downloads;
                    if (totalDownloads > 0) {
                        newDownloads = new Intl.NumberFormat().format(totalDownloads);
                    }

                    const fetchedStars = repoStarsMap[pkg.repo] || stats[pkg.name]?.stars;

                    if (stats[pkg.name]?.downloads !== newDownloads || stats[pkg.name]?.stars !== fetchedStars) {
                        updatedStats[pkg.name] = {
                            downloads: newDownloads,
                            stars: fetchedStars
                        };
                        hasChanges = true;
                    }
                } catch (error) {
                    console.error(`Error fetching stats for ${pkg.name}:`, error);
                }
            }));

            if (hasChanges) {
                setStats(updatedStats);
            }
        };

        fetchStats();
    }, []);

    return (
        <section id="opensource" aria-label="Open Source Contributions" className="relative overflow-hidden bg-[#0B0D12] py-24">
            {/* Background decor */}
            <div className="absolute left-0 top-1/2 -z-10 h-96 w-96 rounded-full bg-[#FFB020]/10 blur-[100px]" />
            <div className="absolute right-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#6EE7B7]/10 blur-[100px]" />

            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#FFB020]">Community</p>
                    <div className="mb-4 flex items-center gap-2.5">
                        <Package className="h-6 w-6 text-[#FFB020]" />
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                            Open Source
                        </h2>
                    </div>
                    <p className="max-w-2xl text-lg text-slate-400">
                        Contributing to the developer community with powerful tools and libraries.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {packages.map((pkg, index) => (
                        <motion.a
                            key={index}
                            href={pkg.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-all hover:border-[#FFB020]/40 hover:bg-slate-900/60"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FFB020]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                            <div className="relative z-10 flex h-full flex-col">
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="rounded-lg bg-[#FFB020]/10 p-3 text-[#FFB020] transition-colors group-hover:text-[#ffc352]">
                                        <Package className="h-6 w-6" />
                                    </div>
                                    <ExternalLink className="h-5 w-5 text-slate-500 transition-colors group-hover:text-[#FFB020]" />
                                </div>

                                <h3 className="mb-2 text-xl font-bold text-slate-200 transition-colors group-hover:text-white">
                                    {pkg.name}
                                </h3>

                                <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-400">
                                    {pkg.desc}
                                </p>

                                <div className="mb-4 flex flex-wrap gap-2">
                                    {pkg.tags.map((tag, i) => (
                                        <span key={i} className="rounded border border-slate-800 bg-slate-950/60 px-2 py-1 text-xs text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 border-t border-slate-800 pt-4 text-xs font-medium text-slate-500">
                                    <span className="flex items-center gap-1">
                                        <Download className="h-3 w-3 text-[#6EE7B7]" /> {(stats[pkg.name] || pkg.defaultStats).downloads}
                                    </span>
                                    <span className="flex items-center gap-1 transition-colors group-hover:text-[#FFB020]">
                                        <Star className="h-3 w-3" /> {(stats[pkg.name] || pkg.defaultStats).stars}
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpenSource;