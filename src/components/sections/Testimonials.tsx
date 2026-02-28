"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Анна С.",
        goal: "ЕГЭ Профиль",
        text: "Мария объясняет так, что всё становится очевидно. Я перестала зазубривать и начала понимать. Поступила на бюджет в Вышку!",
        scoreStart: 54,
        scoreEnd: 88,
        isGrade: false,
    },
    {
        name: "Игорь М.",
        goal: "Олимпиадная математика",
        text: "Думал, что олимпиадные задачи — это не для меня. За два месяца мы разобрали приёмы, которых нет ни в одном учебнике. Призёр регионального этапа!",
        scoreStart: 2,
        scoreEnd: 5,
        isGrade: true,
    },
    {
        name: "София К.",
        goal: "ЕГЭ Профиль",
        text: "Раньше геометрия казалась магией. Теперь это мой любимый раздел. Уроки пролетают незаметно!",
        scoreStart: 62,
        scoreEnd: 94,
        isGrade: false,
    },
    {
        name: "Дмитрий В.",
        goal: "ОГЭ Математика",
        text: "Написал на максимальный балл, хотя в начале года пробники были на тройку. Рекомендую всем!",
        scoreStart: 3,
        scoreEnd: 5,
        isGrade: true,
    }
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const scrollWidth = scrollContainerRef.current?.scrollWidth || 0;
            const amountToScroll = scrollWidth - window.innerWidth;

            if (amountToScroll > 0) {
                gsap.to(scrollContainerRef.current, {
                    x: -amountToScroll - 40,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: `+=${amountToScroll}`,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                    }
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="testimonials-section" ref={sectionRef} className="w-full h-screen relative z-10 overflow-hidden flex flex-col justify-center bg-transparent py-10">
            <div className="px-4 sm:px-8 lg:px-16 mb-12 max-w-7xl w-full mx-auto shrink-0 mt-20">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                    Отзывы и <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">Кейсы</span>
                </h2>
                <p className="text-slate-400 mt-4 text-lg max-w-2xl">Реальные истории тех, кто поверил в себя и пробил свой потолок благодаря понятному объяснению.</p>
            </div>

            <div ref={scrollContainerRef} className="flex gap-6 md:gap-8 px-4 sm:px-8 lg:px-16 w-max h-max pb-12 items-center">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="w-[320px] md:w-[450px] shrink-0 glass rounded-3xl p-6 md:p-8 border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden group h-[400px] hover:-translate-y-2 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                        <div className="relative z-10 flex-col flex h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{t.name}</h3>
                                    <p className="text-sm text-sky-400">{t.goal}</p>
                                </div>
                                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-white/10 group-hover:scale-110 transition-transform bg-emerald-500/10 text-emerald-400">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                            </div>

                            <p className="text-slate-300 md:text-lg mb-8 italic flex-1 leading-relaxed">
                                &quot;{t.text}&quot;
                            </p>

                            <div className="bg-slate-900/50 rounded-2xl p-4 border border-white/5 relative overflow-hidden shrink-0 mt-auto">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-slate-400 font-medium tracking-wide">РОСТ РЕЗУЛЬТАТА</span>
                                    <span className="text-sm font-bold text-emerald-400">+{t.scoreEnd - t.scoreStart} {t.isGrade ? 'б.' : 'б.'}</span>
                                </div>

                                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex relative">
                                    <div
                                        className="h-full bg-slate-600 transition-all duration-1000 group-hover:bg-slate-500"
                                        style={{ width: `${(t.scoreStart / (t.isGrade ? 5 : 100)) * 100}%` }}
                                    ></div>
                                    <div
                                        className="h-full bg-emerald-500 transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                        style={{ width: `${((t.scoreEnd - t.scoreStart) / (t.isGrade ? 5 : 100)) * 100}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center mt-2 px-1">
                                    <span className="text-xs text-slate-400">{t.scoreStart} {t.isGrade ? 'оценка' : 'балла'}</span>
                                    <span className="text-xs text-emerald-400 font-bold">{t.scoreEnd} {t.isGrade ? 'оценка' : 'баллов'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
