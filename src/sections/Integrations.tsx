"use client";

import IntegrationColumns from "./IntegrationsColumn";
import Tag from "@/components/Tag";

const integrations = [
    {
        name: "Mobile Van Advertising",
        description: [
            "Transform your brand into a moving bill board with high-impact visuals.",
            "Ideal for local, city-wide, or state-wide campaigns.",
            "Ensures maximum exposure across different locations.",
        ],
    },
    {
        name: "Digital Marketing",
        description: [
            "Build a strong online presence with SEO, PPC, and social media campaigns",
            "Engage your audience through Facebook, Instagram, LinkedIn, and Google Ads",
            "Drive traffic, leads, and sales with content marketing and paid promotions",
        ],
    },
    {
        name: "Social Media Management",
        description: [
            "📲 Social Media Marketing – Engaging audiences through Facebook, Instagram, LinkedIn, and Twitter ads.",
            "🔍 Google Ads & SEO – Increasing brand visibility and website traffic through digital strategies.",
            "🎥 Video & Influencer Marketing – Leveraging content creation and collaborations with influencers.",
            "📧 Email & WhatsApp Marketing – Targeted campaigns for personalized customer engagement.",
        ],
    },
    {
        name: "Pamphlet & Flyer Distribution",
        description: [
            "Door-to-door, hand-to-hand, and newspaper insertions for targeted promotions.",
            "Reach your audience directly with compelling messaging.",
            "Cost-effective and efficient for local advertising campaigns.",
        ],
    },
    {
        name: "No Parking Board Advertising",
        description: [
            "Strategic placement in high-traffic areas for maximum visibility.",
            "Acts as a constant reminder of your brand in prime locations.",
            "Affordable yet highly effective outdoor advertising solution.",
            "Permanent, low-cost brand placements at key locations for 24/7 exposure",
        ],
    },
    {
        name: "Other Branding & Advertising Services",
        description: [
            "Hoardings & Billboard Advertising",
            "LED Van Promotions",
            "Event Sponsorship Marketing",
            "Influencer & Video Marketing",
            "Corporate Branding & Printing Solutions ",
        ],
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden" id="integrations">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Online or Offline marketing</Tag>
                        <h2 className="text-4xl md:text-6xl text-gray-700 font-medium mt-6">
                            Our Core{" "}
                            <span className="text-blue-400">Services</span>
                        </h2>
                        <p className="text-gray-900 mt-4 text-lg">
                            We provide a full range of online and offline
                            marketing solutions to help businesses grow,
                            increase visibility, and drive sales effectively.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumns integrations={integrations} />
                            <IntegrationColumns
                                integrations={integrations.slice().reverse()}
                                reverse
                                className="hidden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
