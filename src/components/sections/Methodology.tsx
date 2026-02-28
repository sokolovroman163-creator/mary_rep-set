"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Laptop, Compass, TrendingUp } from "lucide-react";
import dynamic from "next/dynamic";
import { useInView } from "framer-motion";

const CompassModel = dynamic(() => import("../canvas/CompassModel"), { ssr: false });
const GrowthChartModel = dynamic(() => import("../canvas/GrowthChartModel"), { ssr: false });

export default function Methodology() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const [hoverCompass, setHoverCompass] = useState(false);

    return (
        <section id="method-section" ref={containerRef} className="w-full py-24 relative z-10 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col space-y-16">

                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                        Методика и формат
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Современный подход, доказанная эффективность и упор на понимание смыслов, а не заучивание алгоритмов.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                    {/* Card 1: Online Format */}
                    <div
                        className="glass rounded-3xl p-1 shadow-xl border-white/10 group overflow-hidden"
                        style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s' }}
                    >
                        <div className="bg-slate-900/50 w-full h-full rounded-[1.3rem] p-6 lg:p-8 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-colors duration-500"></div>

                            <div className="relative w-full h-48 rounded-2xl overflow-hidden glass border-white/5 group-hover:border-sky-500/30 transition-colors">
                                <Image
                                    src="/images/photo_2_2026-02-28_18-58-06.jpg"
                                    alt="Онлайн формат"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col items-center space-y-3 relative z-10">
                                <div className="p-3 glass rounded-full text-sky-400 mb-2">
                                    <Laptop className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Удобный онлайн</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Занятия на интерактивных досках, записи всех уроков и удобная база материалов в Notion.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Interactive */}
                    <div
                        className="glass rounded-3xl p-1 shadow-xl border-white/10 group overflow-hidden"
                        style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s' }}
                        onMouseEnter={() => setHoverCompass(true)}
                        onMouseLeave={() => setHoverCompass(false)}
                    >
                        <div className="bg-slate-900/50 w-full h-full rounded-[1.3rem] p-6 lg:p-8 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500"></div>

                            <div className="relative w-full h-48 rounded-2xl overflow-hidden glass border-white/5 flex items-center justify-center bg-black/20">
                                <CompassModel isHovered={hoverCompass} />
                            </div>

                            <div className="flex flex-col items-center space-y-3 relative z-10">
                                <div className="p-3 glass rounded-full text-indigo-400 mb-2 transition-transform duration-500 group-hover:rotate-45">
                                    <Compass className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Интерактив</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Сложные концепции планиметрии и стереометрии объясняются на 3D-моделях и интерактивах.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Results */}
                    <div
                        className="glass rounded-3xl p-1 shadow-xl border-white/10 group overflow-hidden"
                        style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s' }}
                    >
                        <div className="bg-slate-900/50 w-full h-full rounded-[1.3rem] p-6 lg:p-8 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-500"></div>

                            <div className="relative w-full h-48 rounded-2xl overflow-hidden glass border-white/5 flex items-center justify-center bg-black/20">
                                <GrowthChartModel isVisible={isInView} />
                            </div>

                            <div className="flex flex-col items-center space-y-3 relative z-10">
                                <div className="p-3 glass rounded-full text-emerald-400 mb-2">
                                    <TrendingUp className="w-6 h-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Результат</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Постоянный трекинг прогресса, пробные варианты каждый месяц и гарантия роста баллов.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
