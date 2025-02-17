"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <h2 className="uppercase text-3xl text-center font-bold mb-6 transition-colors duration-300 hover:text-blue-400">
                Industries We Serve
            </h2>
            <HoverEffect items={projects} />
        </div>
    );
}

export const projects = [
    {
        title: "Retail & E-commerce",
        description: "Boost store visits and online sales",
    },
    {
        title: "Real Estate & Builders ",
        description: "Generate leads for property sales",
    },
    {
        title: "Educational Institutions ",
        description: "Educational Institutions ",
    },
    {
        title: "Healthcare & Wellness ",
        description: "Enhance patient outreach and awareness",
    },
    {
        title: "Restaurants & Food Chains ",
        description: "Drive more footfall with localized marketing.",
    },
    {
        title: "Automobile & Dealerships ",
        description: "Expand brand reach and customer base.",
    },
    {
        title: "Local & National Businesses",
        description: "Tailored advertising solutions for all industries.",
    },
];
