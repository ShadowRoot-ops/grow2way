"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `we provide end-to-end branding solutions to elevate your presence and engage your target audience effectively.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start 90%", "end 30%"], // Adjusted for better appearance
    });

    const [currentWord, setCurrentWord] = useState(0);

    // Corrected: Make words APPEAR as you scroll down
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(Math.floor(latest)); // Ensure whole numbers for word index
        });
    }, [wordIndex]);

    return (
        <section className="py-20 lg:py-32">
            <div className="container">
                <div className="sticky top-10 md:top-16 lg:top-24">
                    <div className="flex justify-center">
                        <Tag>
                            Let&apos;s discuss how we can elevate your
                            brand&apos;s visibility and impact
                        </Tag>
                    </div>
                    <div className="text-4xl md:text-4xl lg:text-4xl text-center font-medium mt-10">
                        <span>
                            Whether you need mobile van advertising, social
                            media management, digital marketing, pamphlet
                            distribution, and no parking board advertising,{" "}
                        </span>
                        <span className="">
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={twMerge(
                                        "transition duration-500 text-black",
                                        index < currentWord && "text-blue-600"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-cyan-700 block">
                            Let&apos;s Grow Your Brand Together
                        </span>
                    </div>
                </div>
                <div className="h-[100vh]" ref={scrollTarget}></div>{" "}
                {/* Adjust height for better scrolling effect */}
            </div>
        </section>
    );
}
