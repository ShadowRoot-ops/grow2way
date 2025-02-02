import IntegrationColumns from "@/components/IntegrationsColumn";
import Tag from "@/components/Tag";

const integrations = [
    {
        name: "SEO Optimization",
        description: "Improve search engine rankings and organic traffic.",
    },
    {
        name: "Social Media Marketing",
        description: "Engage and grow your audience on social platforms.",
    },
    {
        name: "Pay-Per-Click Advertising",
        description: "Drive instant traffic with targeted paid ads.",
    },
    {
        name: "Content Marketing",
        description: "Create valuable content to attract and retain customers.",
    },
    {
        name: "Email Marketing",
        description: "Boost conversions with personalized email campaigns.",
    },
    {
        name: "Influencer Marketing",
        description: "Leverage influencers to expand your brand reach.",
    },
    {
        name: "Video Production & Marketing",
        description: "Create compelling video content for promotions.",
    },
    {
        name: "Brand Strategy & Identity",
        description: "Develop a strong brand presence and recognition.",
    },
    {
        name: "Event Marketing",
        description: "Promote and manage offline and online events.",
    },
    {
        name: "Print Advertising",
        description: "Traditional marketing through brochures and magazines.",
    },
    {
        name: "Local Business Promotions",
        description: "Target local customers with geo-specific strategies.",
    },
    {
        name: "Radio & TV Advertising",
        description: "Increase brand awareness through broadcast media.",
    },
];
export type IntegrationsType = typeof integrations;
export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden" id="integrations">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Online or Offline marketing</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Our Digital Marketing{" "}
                            <span className="text-blue-400">Services</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
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
