"use client";
import { motion, useAnimate, AnimationPlaybackControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const animation = useRef<AnimationPlaybackControls | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const controls = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, ease: "linear", repeat: Infinity }
        );

        animation.current = controls;

        return () => controls.stop();
    }, []);

    useEffect(() => {
        if (animation.current) {
            animation.current.speed = isHovered ? 0.5 : 1;
        }
    }, [isHovered]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-cyan-400 text-7xl">
                                &#10038;
                            </span>
                            <span className="group-hover:text-cyan-400">
                                Grow Your Business with Us
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
