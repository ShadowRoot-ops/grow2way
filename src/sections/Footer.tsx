"use client";

import { FC, useEffect } from "react";
import Button from "@/components/Button";
import useTextRevealAnimation from "@/components/useTextRevealAnimation";
import { useInView } from "framer-motion";

interface NavItem {
    href: string;
    label: string;
}

const navItems: NavItem[] = [
    { href: "#", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#integrations", label: "Integrations" },
    { href: "#faqs", label: "FAQs" },
];

const Footer: FC = () => {
    const { scope, entranceAnimation } = useTextRevealAnimation();
    const inView = useInView(scope);
    useEffect(() => {
        if (inView) {
            entranceAnimation();
        }
    }, [inView, entranceAnimation]);
    return (
        <footer className="text-black">
            <div className="container">
                <div className="py-24">
                    <div className="flex items-center gap-3">
                        <div className="size-3 rounded-full bg-lime-400 animate-bounce"></div>
                        <span className="uppercase">Contact Us</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mt-8 md:items-center">
                        {/* Left Column: Heading and Email Button */}
                        <div>
                            <h2
                                className="text-4xl md:text-7xl lg:text-8xl font-extralight"
                                ref={scope}
                            >
                                Let&apos;s Take Your Brand to the Next Level
                            </h2>
                            <Button
                                variant="secondary"
                                className="mt-8"
                                iconAfter={
                                    <div className="size-6 overflow-hidden">
                                        <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2 ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                }
                                aria-label="Contact us via email"
                            >
                                groww2way@gmail.com
                            </Button>
                            {/* Social Media Links */}
                            <div className="flex gap-4 mt-8">
                                <a
                                    href="https://wa.me/message/MSEI24TW2QL6B1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Contact us via WhatsApp"
                                >
                                    <Button variant="text" className="text-lg">
                                        WhatsApp
                                    </Button>
                                </a>
                                <a
                                    href="https://www.linkedin.com/your-linkedin-profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Contact us via LinkedIn"
                                >
                                    <Button variant="text" className="text-lg">
                                        LinkedIn
                                    </Button>
                                </a>
                                <a
                                    href="https://www.instagram.com/grow2waymarketingsolutions?igsh=MWk0ajNzaGZqanBkMQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Contact us via Instagram"
                                >
                                    <Button variant="text" className="text-lg">
                                        Instagram
                                    </Button>
                                </a>
                                <a
                                    href="https://www.facebook.com/share/18diY2fPWD/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Contact us via Facebook"
                                >
                                    <Button variant="text" className="text-lg">
                                        Facebook
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Navigation Links */}
                        <nav className="flex flex-col md:items-end gap-8 md:mt-0">
                            {navItems.map(({ href, label }) => (
                                <a href={href} key={label}>
                                    <Button variant="text" className="text-lg">
                                        {label}
                                    </Button>
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
                <p className="py-16 text-white/30 text-sm">
                    Copyright &copy; GROW2WAY All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
