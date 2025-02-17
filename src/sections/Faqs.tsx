"use client";

import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "✔️ Integrated Marketing Expertise",
        answer: "Combining digital, outdoor, and print advertising for comprehensive branding.",
    },
    {
        question: "✔️ Innovative & Tailored Strategies ",
        answer: "It depends on the strategy. SEO can take 3-6 months to show results, PPC ads provide instant traffic, and social media & content marketing build engagement over time.",
    },
    {
        question: "✔️ High ROI Advertising",
        answer: "Focused on results-driven campaigns that maximize brand awareness and customer engagement.",
    },
    {
        question: "✔️ End-to-End Support",
        answer: "From campaign planning to execution, we handle everything for you.",
    },
    {
        question: "✔️ Trusted by Growing Businesses",
        answer: "Proven success in helping brands reach new heights in visibility and profitability.",
    },
    {
        question: "✔️ Innovative & Data-Driven Approach",
        answer: "We use advanced marketing strategies backed by market research and data analytics.",
    },
    {
        question: "✔️ Cost-Effective, High ROI Marketing ",
        answer: "Our campaigns are designed to maximize impact while optimizing your investment.",
    },
    {
        question: "✔️ End-to-End Marketing Solutions ",
        answer: "From planning and execution to tracking and optimization, we handle every aspect of your campaign.",
    },
    {
        question: "✔️ Experienced Team & Proven Results ",
        answer: "With a team of marketing experts, designers, and strategists, we ensure exceptional results.",
    },
    {
        question: "✔️ Multi-Channel Marketing Expertise ",
        answer: "We integrate offline and online marketing for 360-degree brand growth.",
    },
];

export default function Faqs() {
    const [selectedIndex, setselectedIndex] = useState<null | number>(null);

    return (
        <section className="py-24" id="faqs">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-4xl mx-auto">
                    Why Choose{" "}
                    <span className="block">
                        GROW 2 WAY{" "}
                        <span className="ml-2 text-cyan-400">
                            Marketing Solutions?
                        </span>
                    </span>
                </h2>

                {/* Updated Layout: Two-Column Grid */}
                <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 text-white rounded-2xl border border-white/10 p-6"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() =>
                                    setselectedIndex(
                                        selectedIndex === faqIndex
                                            ? null
                                            : faqIndex
                                    )
                                }
                            >
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge(
                                        "feather feather-plus text-cyan-400 flex shrink-0 transition duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 16,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
