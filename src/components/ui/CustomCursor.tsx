"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [inputHovered, setInputHovered] = useState(false);
    const [hidden, setHidden] = useState(true); // hidden until first mouse move

    useEffect(() => {
        setMounted(true);
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };

        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseDown = () => setClicked(true);
        const onMouseUp = () => setClicked(false);
        const onMouseEnter = () => setHidden(false);
        const onMouseLeave = () => setHidden(true);

        const handleLinkHoverEvents = () => {
            document.querySelectorAll("a, button, [role='button']").forEach(el => {
                el.addEventListener("mouseenter", () => setLinkHovered(true));
                el.addEventListener("mouseleave", () => setLinkHovered(false));
            });
            document.querySelectorAll("input, textarea").forEach(el => {
                el.addEventListener("mouseenter", () => setInputHovered(true));
                el.addEventListener("mouseleave", () => setInputHovered(false));
            });
        };

        addEventListeners();
        handleLinkHoverEvents();

        return () => removeEventListeners();
    }, []);

    if (!mounted) return null;

    const cursorVariants = {
        default: {
            height: 32,
            width: 32,
            x: position.x - 16,
            y: position.y - 16,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            mixBlendMode: "difference" as any,
        },
        click: {
            height: 24,
            width: 24,
            x: position.x - 12,
            y: position.y - 12,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            mixBlendMode: "difference" as any,
        },
        hoverLink: {
            height: 64,
            width: 64,
            x: position.x - 32,
            y: position.y - 32,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "2px solid rgba(255, 255, 255, 0.8)",
            mixBlendMode: "difference" as any,
        },
        hoverInput: {
            height: 48,
            width: 4,
            x: position.x - 2,
            y: position.y - 24,
            borderRadius: "4px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "none",
            mixBlendMode: "normal" as any,
        }
    };

    let activeVariant = "default";
    if (clicked) activeVariant = "click";
    else if (inputHovered) activeVariant = "hoverInput";
    else if (linkHovered) activeVariant = "hoverLink";

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
                variants={cursorVariants}
                animate={activeVariant}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
                initial="default"
                style={{ opacity: hidden ? 0 : 1 }}
            >
                {activeVariant === "default" && (
                    <div className="w-1 h-1 bg-white rounded-full"></div> // "compass" center point hint
                )}
            </motion.div>
        </>
    );
}
