"use client";

import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "How is Grow 2 Way different from others?",
        answer: "Grow 2 Way stands out because we offer a personalized, hybrid approach combining both online and offline marketing to ensure maximum reach and engagement..",
    },
    {
        question: "How long does it take to see results?",
        answer: "It depends on the strategy, SEO can take 3-6 months to show results, PPC ads provide instant traffic, Social media & content marketing build engagement over time.",
    },
    {
        question: "How much does digital marketing cost?",
        answer: "The cost varies based on the services needed. We offer flexible packages based on your goals, whether it's brand awareness, lead generation, or conversions.",
    },
    {
        question: "Can you handle both small and large businesses?",
        answer: "Absolutely! Whether you're a startup or a large enterprise, we create tailored strategies to meet your needs.",
    },
    {
        question: "How can I get started?",
        answer: "Simply reach out to us! We’ll analyze your business, discuss your goals, and craft a marketing plan that works best for you",
    },
];

export default function Faqs() {
    const [selectedIndex, setselectedIndex] = useState(0);
    return (
        <section className="py-24" id="faqs">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Question? We&apos;ve got
                    <span className="text-cyan-400"> answers</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
                        >
                            <div
                                className="flex justify-between items-center"
                                onClick={() => setselectedIndex(faqIndex)}
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
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className={twMerge("overflow-hidden")}
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
