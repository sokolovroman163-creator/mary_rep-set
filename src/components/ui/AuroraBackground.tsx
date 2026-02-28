"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AuroraBackground({ children }: { children?: React.ReactNode }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        const render = () => {
            time += 0.005;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const width = canvas.width;
            const height = canvas.height;

            // We will create a few large soft gradients that move around
            const drawBlob = (x: number, y: number, r: number, color: string) => {
                ctx.beginPath();
                const rad = ctx.createRadialGradient(x, y, 0, x, y, r);
                rad.addColorStop(0, color);
                rad.addColorStop(1, "transparent");
                ctx.fillStyle = rad;
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();
            };

            // Blob 1 (Tech Blue)
            const x1 = width * 0.5 + Math.sin(time) * width * 0.3;
            const y1 = height * 0.5 + Math.cos(time * 0.8) * height * 0.3;
            drawBlob(x1, y1, width * 0.6, "rgba(56, 189, 248, 0.15)"); // tailwind sky-400

            // Blob 2 (Aurora Green)
            const x2 = width * 0.3 + Math.cos(time * 1.2) * width * 0.2;
            const y2 = height * 0.7 + Math.sin(time * 0.9) * height * 0.4;
            drawBlob(x2, y2, width * 0.7, "rgba(52, 211, 153, 0.1)"); // tailwind emerald-400

            // Blob 3 (Deep Purple/Indigo)
            const x3 = width * 0.7 + Math.sin(time * 0.7) * width * 0.4;
            const y3 = height * 0.3 + Math.cos(time * 1.1) * height * 0.3;
            drawBlob(x3, y3, width * 0.6, "rgba(129, 140, 248, 0.15)"); // tailwind indigo-400

            requestAnimationFrame(render);
        };

        render();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <div className="relative min-h-screen w-full bg-[#030712] overflow-hidden text-slate-200">
            <div className="absolute inset-0 z-0">
                <canvas ref={canvasRef} className="w-full h-full opacity-80" />
            </div>

            {/* Noise texture overlay for premium feel */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}
            />

            <div className="relative z-10 font-sans">
                {children}
            </div>
        </div>
    );
}
