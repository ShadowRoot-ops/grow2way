"use client";

// import React, { Fragment } from "react";
// import { motion } from "framer-motion";
// const names = [
//     { name: "Novadays Public School" },
//     { name: "Om Ganesh Tutorials" },
//     { name: "TTT Academy" },
// ];

// export default function LogoTicker() {
//     return (
//         <section className="py-24 overflow-x-clip">
//             <div className="container">
//                 <h3 className="text-center text-black text-xl">
//                     Proudly Collaborated With
//                 </h3>
//             </div>
//             <div className="flex justify-center shrink-0 gap-24 pr-24 overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
//                 <motion.div
//                     animate={{
//                         x: "-50%",
//                     }}
//                     transition={{
//                         duration: 30,
//                         ease: "linear",
//                         repeat: Infinity,
//                     }}
//                     className="flex flex-none gap-24 pr-24"
//                 >
//                     {Array.from({ length: 2 }).map((_, i) => (
//                         <Fragment key={i}>
//                             {names.map((item, index) => (
//                                 <div
//                                     key={index}
//                                     className="text-black text-lg whitespace-nowrap"
//                                 >
//                                     {item.name}
//                                 </div>
//                             ))}
//                         </Fragment>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// }
import React, { useState, useEffect, useRef, TouchEvent } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

interface StatProps {
    percentage: number;
    label: string;
    company: string;
    isIncrease: boolean;
}

const Stat: React.FC<StatProps> = ({
    percentage,
    label,
    company,
    isIncrease,
}) => (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex-shrink-0 w-[280px] sm:w-[300px] lg:w-auto flex flex-col items-center justify-center transition-transform hover:scale-105">
        <div className="flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {isIncrease ? (
                <TrendingUp className="text-emerald-500 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            ) : (
                <TrendingDown className="text-rose-500 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            )}
            <span className={isIncrease ? "text-emerald-500" : "text-rose-500"}>
                {percentage}%
            </span>
        </div>
        <h3 className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium mb-3 text-center px-2">
            {label}
        </h3>
        <div className="w-20 sm:w-24 lg:w-32 h-8 sm:h-10 lg:h-12 flex items-center justify-center">
            <p className="text-gray-600 font-semibold text-xs sm:text-sm text-center">
                {company}
            </p>
        </div>
    </div>
);

function App() {
    const stats = [
        {
            percentage: 50,
            label: "Cost Per Action",
            company: "ValueLeaf",
            isIncrease: false,
        },
        {
            percentage: 30,
            label: "Increase in Leads",
            company: "ICICI Prudential",
            isIncrease: true,
        },
        {
            percentage: 100,
            label: "Content Viewability",
            company: "Prestige",
            isIncrease: true,
        },
        {
            percentage: 15,
            label: "Increase in Subscriptions",
            company: "Flinto",
            isIncrease: true,
        },
        {
            percentage: 700,
            label: "Return on Ad Spend",
            company: "LifeBoost",
            isIncrease: true,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleTouchStart = (e: TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
        setIsPaused(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            // Swipe left
            setCurrentIndex((prev) => (prev + 1) % stats.length);
        }

        if (touchStart - touchEnd < -75) {
            // Swipe right
            setCurrentIndex((prev) => (prev - 1 + stats.length) % stats.length);
        }
        setIsPaused(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentIndex((prev) => (prev + 1) % stats.length);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [stats.length, isPaused]);

    useEffect(() => {
        if (containerRef.current) {
            const scrollPosition = currentIndex * (300 + 16); // card width + gap
            containerRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
        }
    }, [currentIndex]);

    return (
        <div className="min-h-[50vh] bg-gray-100 py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[100vw] mx-auto">
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center text-gray-900 mb-4 sm:mb-6 lg:mb-8">
                    Advertiser Results with Taboola
                </h1>

                {/* Desktop View */}
                <div className="hidden lg:grid grid-cols-5 gap-4 max-w-7xl mx-auto px-4">
                    {stats.map((stat, index) => (
                        <Stat key={index} {...stat} />
                    ))}
                </div>

                {/* Mobile and Tablet View */}
                <div className="lg:hidden relative max-w-[90vw] mx-auto">
                    <div
                        ref={containerRef}
                        className="mt-6 flex overflow-x-hidden gap-4 pb-4 px-2 touch-pan-x"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="flex-shrink-0">
                                <Stat {...stat} />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                        {stats.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentIndex
                                        ? "bg-blue-600"
                                        : "bg-gray-300"
                                }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
