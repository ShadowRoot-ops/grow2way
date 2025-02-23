"use client";

import { type IntegrationsType } from "@/sections/Integrations";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";

export default function IntegrationColumns(props: {
    integrations: IntegrationsType;
    className?: string;
    reverse?: boolean;
}) {
    const { integrations, className, reverse } = props;
    const [isPaused, setIsPaused] = useState(false);

    // Animation Variants
    const variants = {
        scrolling: {
            y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
            transition: {
                duration: 50, // Normal speed
                repeat: Infinity,
                ease: "linear",
            },
        },
        paused: {
            y: reverse ? ["-50%", "-48%"] : ["0%", "-2%"], // Minor movement to avoid an abrupt stop
            transition: {
                duration: 3, // Slow down instead of stopping instantly
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            animate={isPaused ? "paused" : "scrolling"}
            variants={variants}
            className={twMerge("flex flex-col gap-4 pb-4", className)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {integrations.map((integration) => (
                        <motion.div
                            key={integration.name}
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "tween",
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className="bg-neutral-900 border border-white/15 rounded-3xl p-6 mt-8"
                        >
                            <div className="text-xl text-white text-center mt-5">
                                <h3>{integration.name}</h3>
                            </div>
                            {Array.isArray(integration.description) ? (
                                <ul className="mt-3 list-disc list-inside text-green-300 text-sm text-left">
                                    {integration.description.map(
                                        (point, index) => (
                                            <li key={index}>{point}</li>
                                        )
                                    )}
                                </ul>
                            ) : (
                                <p className="text-center text-black mt-2">
                                    {integration.description}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </Fragment>
            ))}
        </motion.div>
    );
}
