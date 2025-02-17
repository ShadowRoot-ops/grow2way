"use client";

import { type IntegrationsType } from "@/sections/Integrations";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function IntegrationColumns(props: {
    integrations: IntegrationsType;
    className?: string;
    reverse?: boolean;
}) {
    const { integrations, className, reverse } = props;
    return (
        <motion.div
            initial={{
                y: reverse ? "-50%" : 0,
            }}
            animate={{
                y: reverse ? 0 : "-50%",
            }}
            transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
            }}
            className={twMerge("flex flex-col gap-4 pb-4", className)}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {integrations.map((integration) => (
                        <div
                            key={integration.name}
                            className="bg-neutral-900 border border-white/15 rounded-3xl p-6 mt-8"
                        >
                            <div className="text-xl text-white text-center mt-5">
                                <h3>{integration.name}</h3>
                            </div>

                            {/* Render description as bullet points if it's an array */}
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
                        </div>
                    ))}
                </Fragment>
            ))}
        </motion.div>
    );
}
