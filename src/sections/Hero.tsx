"use client";

import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import cusrsorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();
    const formRef = useRef<HTMLFormElement>(null);

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

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formRef.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                () => {
                    alert("Email sent successfully!");
                },
                (error) => {
                    console.error("Email sending failed:", error.text);
                    alert("Failed to send email. Please try again.");
                }
            );
    };

    return (
        <section
            className="py-24 bg-blue-950 text-white"
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
                        Growth + Success + Brand Power!
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Towards Your Brand Success..!
                </h1>
                <p className="text-center text-xl text-blue-300 mt-8 max-w-2xl mx-auto">
                    At GROW2WAY Marketing Solutions, we turn brands into market
                    leaders with innovative advertising and strategic marketing.
                    From digital to traditional channels, we offer mobile van
                    ads, social media management, digital marketing, pamphlet
                    distribution, and no parking board ads—ensuring maximum
                    visibility and engagement.
                </p>
                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto bg-white/10"
                >
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Enter your Email"
                        required
                        className="bg-transparent border-none px-4 text-white placeholder-white md:flex-1 w-full focus:outline-none"
                    />
                    <Button type="submit" variant="secondary">
                        Contact Us
                    </Button>
                </form>
            </div>
        </section>
    );
}
