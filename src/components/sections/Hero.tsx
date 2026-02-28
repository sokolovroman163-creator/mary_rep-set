"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero-section" className="relative w-full min-h-[100svh] flex items-center justify-center pt-24 pb-12">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Left: Typography & CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start space-y-6 lg:pr-10 z-10"
                >
                    <div className="inline-flex rounded-full bg-white/5 px-4 py-1.5 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        <span className="text-xs sm:text-sm font-medium text-slate-200 tracking-wider uppercase">
                            Стандарты 2026 года
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] font-heading">
                        Твой проводник в мир <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 animate-gradient-x">
                            школьной математики
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl font-light leading-relaxed">
                        Мария Соколова, репетитор для тех, кто целится в топы.
                        Построим надежный фундамент для успешной сдачи ЕГЭ, ОГЭ и понимания вышмата без зубрежки.
                    </p>

                    <div className="pt-4 sm:pt-8 w-full sm:w-auto">
                        <button className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-slate-100 text-slate-900 px-8 py-4 font-semibold text-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                            <span className="absolute inset-0 bg-gradient-to-r from-sky-300 to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 font-bold group-hover:text-slate-900 transition-colors">Начать обучение</span>
                            <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </motion.div>

                {/* Right: 3D Scene */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="h-[50vh] sm:h-[60vh] lg:h-[85vh] w-full"
                >
                    <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[75vh] max-w-md mx-auto glass rounded-3xl p-3 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-white/5">
                            <Image
                                src="/images/hero-photo.jpg"
                                alt="Мария Соколова, репетитор"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 mix-blend-multiply"></div>
                        </div>
                        {/* Decorative glow */}
                        <div className="absolute -bottom-10 right-0 w-32 h-32 bg-sky-500 rounded-full mix-blend-screen filter blur-[50px] opacity-40"></div>
                        <div className="absolute -top-10 left-0 w-32 h-32 bg-emerald-500 rounded-full mix-blend-screen filter blur-[50px] opacity-30"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
