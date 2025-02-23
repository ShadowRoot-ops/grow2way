import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HtmlHTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "inline-flex border-2 border-cyan-600 gap-2 text-cyan-900 px-3 py-1 rounded-full uppercase items-center",
                className
            )}
            {...otherProps}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
}
