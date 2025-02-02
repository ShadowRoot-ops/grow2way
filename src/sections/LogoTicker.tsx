"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";
const names = [
    { name: "Novadays Public School" },
    { name: "Om Ganesh Tutorials" },
    { name: "TTT Academy" },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">
                    Proudly Collaborated With
                </h3>
            </div>
            <div className="flex justify-center shrink-0 gap-24 pr-24 overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <motion.div
                    animate={{
                        x: "-50%",
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex flex-none gap-24 pr-24"
                >
                    {Array.from({ length: 2 }).map((_, i) => (
                        <Fragment key={i}>
                            {names.map((item, index) => (
                                <div
                                    key={index}
                                    className="text-white text-lg whitespace-nowrap"
                                >
                                    {item.name}
                                </div>
                            ))}
                        </Fragment>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
