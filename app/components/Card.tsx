'use client';

import Image from "next/image";
import {Attributes, ReactNode} from "react";

interface CardProps extends Attributes {
    title: string;
    url?: string;
    description?: string;
    icon?: ReactNode;
    logoSrc?: string;
    idx?: number;
    contentLength?: number;
    tags?: string[];
    subtitle?: string;
}

export default function Card(props: CardProps) {
    const colSpan = () => {
        if (props.contentLength && typeof props.idx === "number") {
            return props.contentLength % 2 !== 0 && props.idx === props.contentLength - 1 ? "col-span-full" : "";
        }

        return "";
    }

    return (
        <div
            onClick={() => {
                if (props.url) window.open(props.url, "_blank");
            }}
            className={
                `group bg-[#23272f] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2 
                        hover:scale-105 hover:shadow-2xl border border-transparent hover:border-yellow-400 overflow-hidden flex flex-col 
                        ${(colSpan())} ${props.url ? "cursor-pointer" : ""}
                 `
            }
        >
            {props.tags && props.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 pb-2">
                    {props.tags.map(param => (
                        <span
                            key={param}
                            className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/40 rounded-full px-3 py-1 text-xs font-semibold"
                        >
                            {param}
                        </span>
                    ))}
                </div>
            )}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                    {props.title}
                </h2>
                {props.icon && (
                    <div className="flex-shrink-0 text-yellow-400/70">
                        {props.icon}
                    </div>
                )}
                {props.logoSrc && (
                    <div className="flex-shrink-0">
                        <Image
                            src={props.logoSrc}
                            width={40}
                            height={40}
                            alt={`${props.title} logo`}
                            className="w-10 h-10 object-contain rounded-lg opacity-70"
                        />
                    </div>
                )}
            </div>
            {props.subtitle && (
                <div className="text-sm text-gray-400 pt-1 pb-1">{props.subtitle}</div>
            )}
            {props.description && (
                <p className="text-gray-300 pt-2 pb-2">{props.description}</p>
            )}
        </div>
    );
}
