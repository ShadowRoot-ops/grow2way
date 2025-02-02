"use client";

import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cusrsorYouImage from "@/assets/images/cursor-you.svg";
export default function Hero() {
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, [
        leftPointerAnimate,
        leftPointerScope,
        rightPointerAnimate,
        rightPointerScope,
    ]);
    return (
        <section
            className="py-24"
            style={{
                cursor: `url(${cusrsorYouImage.src}), auto `,
            }}
            id="home"
        >
            <div className="container relative">
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    drag
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Know" />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="More" color="yellow" />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full text-neutral-950 font-semibold">
                        📈Fueling Growth, Crafting Success
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Transforming ideas into impactful results.
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    We turn your ideas into impactful results. With creativity
                    and strategy, we help brands grow and stand out in a
                    competitive market.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        className="bg-transparent px-4 md:flex-1 w-full"
                    />
                    <Button variant="secondary">Contact Us</Button>
                </form>
            </div>
        </section>
    );
}
