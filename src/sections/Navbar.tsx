"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import logo from "../assets/images/grow2way.png";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (href: string) => {
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("Section not found:", href);
        }
        setIsOpen(false);
    };

    return (
        <>
            <section className="py-4 lg:py-8 w-full top-0 z-50 flex items-center justify-between px-6">
                {/* Logo Positioned Outside */}
                <div className="flex-shrink-0">
                    <Image
                        src={logo}
                        alt="Grow 2 WAY Logo"
                        width={80}
                        height={80}
                        className="h-12 w-auto"
                    />
                </div>

                {/* Navbar Container */}
                <div className="border border-black rounded-[27px] md:rounded-full bg-transparent backdrop-blur w-full max-w-4xl mx-auto px-6 py-2 flex justify-center">
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-10 font-medium">
                        {navLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.label}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(link.href);
                                }}
                                className="hover:text-blue-300 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex-shrink-0 lg:hidden">
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
                        className="feather feather-menu cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <line
                            x1="3"
                            y1="12"
                            x2="21"
                            y2="12"
                            className={twMerge(
                                "origin-left transition",
                                isOpen && "rotate-45 -translate-y-1"
                            )}
                        ></line>
                        <line
                            x1="3"
                            y1="6"
                            x2="21"
                            y2="6"
                            className={twMerge(
                                "transition",
                                isOpen && "opacity-0"
                            )}
                        ></line>
                        <line
                            x1="3"
                            y1="18"
                            x2="21"
                            y2="18"
                            className={twMerge(
                                "origin-left transition",
                                isOpen && "-rotate-45 translate-y-1"
                            )}
                        ></line>
                    </svg>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden"
                        >
                            <div className="flex flex-col items-center gap-4 py-4">
                                {navLinks.map((link) => (
                                    <a
                                        href={link.href}
                                        key={link.label}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(link.href);
                                        }}
                                        className="hover:text-gray-300 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </>
    );
}
