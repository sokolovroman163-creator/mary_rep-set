"use client";

import { useState } from "react";
import { Send, Send as TelegramIcon, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const [isFocused, setIsFocused] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <section id="contact-section" className="w-full relative z-10 pt-24 pb-8 px-4 sm:px-6 flex flex-col items-center overflow-hidden">

            <div className="max-w-4xl mx-auto w-full relative mb-24">

                {/* Dynamic Highlight Sphere */}
                <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full bg-gradient-to-tr from-sky-400 via-indigo-500 to-emerald-400 mix-blend-screen filter transition-all duration-1000 origin-center pointer-events-none z-0
            ${submitted ? 'blur-[80px] opacity-50 scale-90' : isFocused ? 'blur-[80px] opacity-40 scale-100' : 'blur-[150px] opacity-10 scale-150'}`}
                ></div>

                <div className="glass rounded-[2rem] p-8 md:p-12 relative z-10 border-white/10 shadow-2xl overflow-hidden backdrop-blur-3xl bg-[#0f172a]/60 min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-center mb-10">
                                    <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">Начать обучение</h2>
                                    <p className="text-slate-400 text-lg">Оставьте заявку, и я свяжусь с вами в течение часа для бесплатной консультации.</p>
                                </div>

                                <form className="max-w-xl mx-auto flex flex-col space-y-6" onSubmit={handleSubmit}>

                                    <div className="flex flex-col space-y-2 relative group">
                                        <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1 transition-colors group-focus-within:text-sky-400">Как к вам обращаться?</label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Имя Фамилия"
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all font-light"
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col space-y-2 relative group">
                                        <label htmlFor="contact" className="text-sm font-medium text-slate-300 ml-1 transition-colors group-focus-within:text-emerald-400">Телефон или Telegram</label>
                                        <input
                                            id="contact"
                                            type="text"
                                            placeholder="@username или +7 (999) 000-00-00"
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all font-light"
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            required
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-white text-slate-900 font-bold text-lg rounded-xl py-4 flex items-center justify-center gap-3 hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95 group/submit disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                        >
                                            {loading ? (
                                                <>
                                                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>
                                                    <span>Отправляем...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Отправить заявку</span>
                                                    <Send className="w-5 h-5 transition-transform group-hover/submit:translate-x-1 group-hover/submit:-translate-y-1" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-xs text-center text-slate-500 mt-4">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col items-center justify-center text-center py-8 space-y-6"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                                >
                                    <CheckCircle className="w-24 h-24 text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.6)]" />
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-4xl sm:text-5xl font-bold font-heading text-white"
                                >
                                    Заявка отправлена!
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-slate-300 text-lg max-w-md"
                                >
                                    Спасибо! Я свяжусь с вами в течение часа и мы обсудим первый шаг вашего пути к высоким баллам. 🚀
                                </motion.p>
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 text-sm text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-4"
                                >
                                    Отправить ещё одну заявку
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <footer className="w-full max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm gap-4">
                <p>&copy; 2026 Мария Соколова. Все права защищены.</p>
                <div className="flex items-center gap-6">
                    <a href="#" className="hover:text-sky-400 transition-colors flex items-center gap-2 font-medium">
                        <TelegramIcon className="w-4 h-4" /> Telegram
                    </a>
                    <a href="#" className="hover:text-sky-400 transition-colors flex items-center gap-2 font-medium">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.762-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" /></svg>
                        VK
                    </a>
                </div>
            </footer>
        </section>
    );
}
