import { useState } from "react";
import { cn } from "../../libs/utils";

interface IntegrationsColumnProps {
    integrations: {
        name: string;
        description: string[];
    }[];
    reverse?: boolean;
    className?: string;
}

export default function IntegrationsColumn({
    integrations,
    reverse = false,
    className,
}: IntegrationsColumnProps) {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div
            className={cn(
                "flex flex-col gap-4 group/column",
                reverse && "mt-[-200px]",
                isPaused ? "animate-none" : "animate-scroll",
                "hover:animate-none", // Add hover pause
                className
            )}
            style={{
                animationDirection: reverse ? "reverse" : "normal",
                animationPlayState: isPaused ? "paused" : "running",
            }}
        >
            {[...integrations, ...integrations].map((integration, index) => (
                <div
                    key={index}
                    className={cn(
                        "group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-md cursor-pointer",
                        isPaused && "border-blue-200 shadow-md",
                        "group-hover/column:border-blue-100" // Subtle highlight on column hover
                    )}
                    onClick={() => setIsPaused(!isPaused)}
                >
                    <h3 className="font-semibold text-xl text-gray-800">
                        {integration.name}
                    </h3>
                    <ul className="mt-4 space-y-2">
                        {integration.description.map((item, idx) => (
                            <li key={idx} className="text-gray-600 text-sm">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
