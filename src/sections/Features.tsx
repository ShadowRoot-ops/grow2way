import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";

const features = [
    "Logo Design & Brand Identity Creation",
    "Stationery & Corporate Collateral",
    "Brand Positioning & Strategy",
    "Company Profile & Brochure Design",
];

export default function Features() {
    return (
        <section className="py-24 bg-white" id="features">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>What We Do</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    We offer a 360-degree branding approach{" "}
                    <span className="text-blue-600">
                        to deliver measurable results
                    </span>
                </h2>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-7">
                    <FeatureCard
                        title="Targeted Reach"
                        description="Connect with your ideal audience through precise digital and offline strategies that maximize your brand's visibility"
                        className="col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white text-center">
                                Reaching the{" "}
                                <span className="bg-gradient-to-r from-teal-500 to-lime-500 bg-clip-text text-transparent">
                                    <span>right audience,</span>{" "}
                                    <video
                                        src="/gif/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                                    />
                                </span>
                                driving impactful results.
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Data-Driven Results"
                        description="Utilize analytics to track, measure, and optimize your marketing efforts for maximum ROI and performance."
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white text-center">
                                Optimizing campaigns for{" "}
                                <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
                                    maximum ROI,{" "}
                                </span>
                                with data insights.
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Creative Campaigns"
                        description="Craft unique, compelling campaigns that resonate with your audience and drive meaningful engagement."
                        className="sm:col-start-1 md:col-start-3"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white text-center">
                                Crafting unique,{" "}
                                <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                                    engaging campaigns
                                </span>{" "}
                                that captivate.
                            </p>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-gray-100 border border-gray-300 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                        >
                            <span className="bg-blue-500 text-white size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg text-gray-900">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
