"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Check, ArrowRight } from "lucide-react";

const Pricing3D = dynamic(() => import("../canvas/Pricing3D"), { ssr: false });

export default function Pricing() {
    const [hoveredPlan, setHoveredPlan] = useState<"ege" | "uni" | null>(null);

    return (
        <section id="pricing-section" className="w-full py-24 relative z-10 px-4 sm:px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">

            {/* 3D Background effect based on hover state */}
            <Pricing3D plan={hoveredPlan} />

            <div className="max-w-7xl mx-auto flex flex-col space-y-16 relative z-10 w-full">

                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                        Форматы и <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Стоимость</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Выбирайте оптимальный формат подготовки. Индивидуальный подход и гарантированный результат.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto w-full">

                    {/* Plan 1: ЕГЭ / ОГЭ */}
                    <div
                        className="glass rounded-[2rem] p-1 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-sky-500/20 border-white/10 group cursor-default"
                        onMouseEnter={() => setHoveredPlan("ege")}
                        onMouseLeave={() => setHoveredPlan(null)}
                    >
                        <div className="bg-[#0f172a]/80 backdrop-blur-2xl w-full h-full rounded-[1.9rem] p-8 lg:p-10 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-colors duration-500"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="inline-flex rounded-full bg-sky-500/10 text-sky-400 px-3 py-1 text-sm font-semibold mb-6 self-start border border-sky-500/20">
                                    Школьники
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">ЕГЭ / ОГЭ</h3>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-4xl font-bold text-white">2 500 ₽</span>
                                    <span className="text-slate-400">/ 60 мин</span>
                                </div>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {["Индивидуальный план подготовки", "Полноценная проверка домашних заданий", "Ежемесячные пробники с разбором", "Постоянная связь в Telegram", "Доступ к базе уроков и конспектов"].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300">
                                            <Check className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                                            <span className="leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 rounded-xl bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white font-semibold transition-all flex items-center justify-center gap-2 group/btn border border-sky-500/30 hover:border-sky-500">
                                    Выбрать тариф
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Plan 2: Олимпиадная математика */}
                    <div
                        className="glass rounded-[2rem] p-1 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-indigo-500/20 border-white/10 group cursor-default"
                        onMouseEnter={() => setHoveredPlan("uni")}
                        onMouseLeave={() => setHoveredPlan(null)}
                    >
                        <div className="bg-[#0f172a]/80 backdrop-blur-2xl w-full h-full rounded-[1.9rem] p-8 lg:p-10 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="inline-flex rounded-full bg-indigo-500/10 text-indigo-400 px-3 py-1 text-sm font-semibold mb-6 self-start border border-indigo-500/20">
                                    Углублённый уровень
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Олимпиадная математика</h3>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-4xl font-bold text-white">3 500 ₽</span>
                                    <span className="text-slate-400">/ 60 мин</span>
                                </div>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {["Подготовка к олимпиадам и турнирам", "Нестандартные задачи повышенной сложности", "Комбинаторика, теория чисел, геометрия", "Формирование математического мышления", "Выявление и устранение пробелов"].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300">
                                            <Check className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                                            <span className="leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-4 rounded-xl bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white font-semibold transition-all flex items-center justify-center gap-2 group/btn border border-indigo-500/30 hover:border-indigo-500">
                                    Выбрать тариф
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
