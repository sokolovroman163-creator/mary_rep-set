"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [inputHovered, setInputHovered] = useState(false);

    const cursorX = useMotionValue(-200);
    const cursorY = useMotionValue(-200);

    const springX = useSpring(cursorX, { stiffness: 500, damping: 28, mass: 0.5 });
    const springY = useSpring(cursorY, { stiffness: 500, damping: 28, mass: 0.5 });

    useEffect(() => {
        setMounted(true);

        const onMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            if (!visible) setVisible(true);
        };

        const onMouseDown = () => setClicked(true);
        const onMouseUp = () => setClicked(false);
        const onMouseLeave = () => setVisible(false);
        const onMouseEnter = () => setVisible(true);

        const handleLinkHover = () => {
            document.querySelectorAll("a, button, [role='button']").forEach(el => {
                el.addEventListener("mouseenter", () => setLinkHovered(true));
                el.addEventListener("mouseleave", () => setLinkHovered(false));
            });
            document.querySelectorAll("input, textarea").forEach(el => {
                el.addEventListener("mouseenter", () => setInputHovered(true));
                el.addEventListener("mouseleave", () => setInputHovered(false));
            });
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);
        document.documentElement.addEventListener("mouseleave", onMouseLeave);
        document.documentElement.addEventListener("mouseenter", onMouseEnter);
        handleLinkHover();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            document.documentElement.removeEventListener("mouseleave", onMouseLeave);
            document.documentElement.removeEventListener("mouseenter", onMouseEnter);
        };
    }, [cursorX, cursorY, visible]);

    if (!mounted) return null;

    const size = clicked ? 24 : linkHovered ? 64 : 32;
    const cursorWidth = inputHovered ? 4 : size;
    const cursorHeight = inputHovered ? 48 : size;
    const offset = size / 2;

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full flex items-center justify-center"
            style={{
                x: springX,
                y: springY,
                width: cursorWidth,
                height: cursorHeight,
                marginLeft: offset - 16,
                marginTop: offset - 16,
                opacity: visible ? 1 : 0,
                backgroundColor: inputHovered
                    ? "rgba(255,255,255,0.9)"
                    : clicked
                        ? "rgba(255,255,255,0.8)"
                        : "rgba(255,255,255,0.08)",
                border: !clicked && !inputHovered
                    ? linkHovered
                        ? "2px solid rgba(255,255,255,0.8)"
                        : "1px solid rgba(255,255,255,0.5)"
                    : "none",
                mixBlendMode: inputHovered ? "normal" : "difference",
                transition: "width 0.2s, height 0.2s, background-color 0.2s, opacity 0.2s",
            }}
        >
            {!clicked && !linkHovered && !inputHovered && (
                <div className="w-1 h-1 bg-white rounded-full" />
            )}
        </motion.div>
    );
}
