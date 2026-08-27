"use client";

import { motion } from 'framer-motion';
import { Cpu, Database, Globe, Server } from 'lucide-react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Ambient "systems" network — a slowly rotating wireframe sphere of
 * connected points, standing in for the distributed / scalable
 * architecture called out in the copy below. Deliberately quiet:
 * low opacity, no interaction required, respects reduced motion.
 */
const SystemsMesh = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const width = mount.clientWidth;
        const height = mount.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 9;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mount.appendChild(renderer.domElement);

        const group = new THREE.Group();

        // Node points, distributed on a sphere (fibonacci sphere for even spacing)
        const nodeCount = 42;
        const radius = 3.4;
        const positions = [];
        const goldenAngle = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < nodeCount; i++) {
            const y = 1 - (i / (nodeCount - 1)) * 2;
            const r = Math.sqrt(1 - y * y);
            const theta = goldenAngle * i;
            positions.push(new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius));
        }

        const pointsGeometry = new THREE.BufferGeometry().setFromPoints(positions);
        const pointsMaterial = new THREE.PointsMaterial({ color: 0xffb020, size: 0.06, transparent: true, opacity: 0.85 });
        group.add(new THREE.Points(pointsGeometry, pointsMaterial));

        // Connect each node to its nearest few neighbors — a sparse network, not a dense mesh
        const linePositions = [];
        for (let i = 0; i < positions.length; i++) {
            const distances = positions
                .map((p, j) => ({ j, d: p.distanceTo(positions[i]) }))
                .filter((e) => e.j !== i)
                .sort((a, b) => a.d - b.d)
                .slice(0, 2);
            distances.forEach(({ j }) => {
                linePositions.push(positions[i].x, positions[i].y, positions[i].z);
                linePositions.push(positions[j].x, positions[j].y, positions[j].z);
            });
        }
        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x6ee7b7, transparent: true, opacity: 0.15 });
        group.add(new THREE.LineSegments(lineGeometry, lineMaterial));

        scene.add(group);

        let frameId;
        let targetRotX = 0;
        let targetRotY = 0;

        const handlePointerMove = (e) => {
            const rect = mount.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            targetRotY = x * 0.6;
            targetRotX = y * 0.4;
        };
        mount.addEventListener('pointermove', handlePointerMove);

        const animate = () => {
            if (!prefersReducedMotion) {
                group.rotation.y += 0.0016;
            }
            group.rotation.x += (targetRotX - group.rotation.x) * 0.02;
            group.rotation.y += (targetRotY - group.rotation.y) * 0.02 * (prefersReducedMotion ? 1 : 0);
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            const w = mount.clientWidth;
            const h = mount.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            mount.removeEventListener('pointermove', handlePointerMove);
            pointsGeometry.dispose();
            pointsMaterial.dispose();
            lineGeometry.dispose();
            lineMaterial.dispose();
            renderer.dispose();
            if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
};

const About = () => {
    const skills = [
        {
            category: "Frontend Development",
            icon: <Globe className="w-6 h-6 text-[#FFB020]" />,
            items: ["React.js", "Nuxt.js", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3", "Material UI", "Vuetify", "Bootstrap"]
        },
        {
            category: "Backend & APIs",
            icon: <Server className="w-6 h-6 text-[#FFB020]" />,
            items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Python", "FastAPI", "Django"]
        },
        {
            category: "Database & Cloud",
            icon: <Database className="w-6 h-6 text-[#FFB020]" />,
            items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Cron Jobs", "Deployment", "DevOps Basics", "AWS"]
        },
        {
            category: "Tools & Concepts",
            icon: <Cpu className="w-6 h-6 text-[#FFB020]" />,
            items: ["Git/GitHub", "Postman", "VS Code", "Performance Optimization", "Scalable Architecture", "Docker", "CI/CD"]
        }
    ];

    return (
        <section id="about" aria-label="About Shashidhar Naik" className="relative overflow-hidden bg-[#0B0D12] py-24">
            {/* Signature: ambient 3D systems network, anchored top-right, fading into the section */}
            <div className="pointer-events-none absolute -right-24 -top-24 -z-0 h-[32rem] w-[32rem] opacity-60 md:opacity-80">
                <SystemsMesh />
            </div>
            <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-[#0B0D12] via-transparent to-[#0B0D12]" />

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-4xl text-center"
                >
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[#FFB020]">About</p>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">The system behind the systems</h2>
                    <p className="text-lg leading-relaxed text-slate-400">
                        I&apos;m a <span className="font-semibold text-[#FFB020]">Software Engineer II</span> with 4+ years building scalable, enterprise-grade web applications.
                        Currently I lead frontend delivery for a major <span className="text-[#6EE7B7]">Warehouse Management System (WMS)</span>.
                        My path started in technical support before moving into full-stack development — a background that keeps me focused on what actually breaks in production, not just what demos well.
                        Outside core work, I&apos;m an active open-source contributor, building tools like <span className="font-semibold text-[#FFB020]">qrlayout</span> for other developers.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-colors hover:border-[#FFB020]/40"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950/70 transition-transform group-hover:scale-110">
                                {skill.icon}
                            </div>
                            <h3 className="mb-4 text-xl font-semibold text-slate-200">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span key={i} className="rounded border border-slate-800 bg-slate-800/50 px-2 py-1 text-sm text-slate-300 transition-colors hover:text-white">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;