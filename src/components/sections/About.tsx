"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Reveal text
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );

            // Reveal image container
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.9, y: 50 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.2, // slightly after text
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about-section" ref={sectionRef} className="w-full min-h-[90vh] flex items-center py-20 relative z-10 px-4 sm:px-0">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left: Text Content */}
                <div ref={textRef} className="order-2 lg:order-1 flex flex-col space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight">
                        Математика — это логика, <br />
                        а <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">не зубрежка</span>
                    </h2>
                    <div className="space-y-4 text-lg text-slate-300 font-light leading-relaxed">
                        <p>
                            Всё еще боишься тригонометрии и интегралов? Я докажу, что любую тему можно понять, если разобрать ее «на пальцах».
                        </p>
                        <p>
                            Мой подход строится на глубоком понимании процессов. Как только ты осознаешь, откуда берется формула — задача решается сама собой. Я не заставляю учить сотни теорем, я учу их выводить.
                        </p>
                        <p>
                            Мои ученики поступают в лучшие школы и лицеи, сдают ЕГЭ и ОГЭ на высокие баллы и побеждают на олимпиадах по математике.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-6">
                        <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 border-white/5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="text-5xl font-bold text-sky-400 relative z-10">85+</span>
                            <span className="text-sm text-slate-400 font-medium tracking-wide relative z-10 text-center">Средний балл ЕГЭ</span>
                        </div>
                        <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 border-white/5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="text-5xl font-bold text-emerald-400 relative z-10">5<span className="text-3xl font-medium text-emerald-400/80">лет</span></span>
                            <span className="text-sm text-slate-400 font-medium tracking-wide relative z-10 text-center">Опыта работы</span>
                        </div>
                    </div>
                </div>

                {/* Right: Glassmorphism Image */}
                <div ref={imageRef} className="order-1 lg:order-2 w-full flex justify-center lg:justify-end [perspective:1000px]">
                    <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl glass p-3 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none transform-gpu transition-transform hover:rotate-y-[-5deg] hover:rotate-x-[2deg] duration-700">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-white/5">
                            <Image
                                src="/images/about-photo.png"
                                alt="Мария Соколова за работой"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80 mix-blend-multiply"></div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-sky-500 rounded-full mix-blend-screen filter blur-[60px] opacity-30 animate-pulse"></div>
                        <div className="absolute -top-8 -left-8 w-40 h-40 bg-emerald-500 rounded-full mix-blend-screen filter blur-[60px] opacity-30 animate-pulse delay-1000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
