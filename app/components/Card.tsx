import {IconType} from "react-icons";
import Image from "next/image";
import {Attributes} from "react";

interface CardProps extends Attributes {
    title: string;
    titleUrl?: string;
    description?: string;
    icon?: IconType;
    logoSrc?: string;
    idx?: number;
    contentLength?: number;
    tags?: string[];
    subtitle?: string;
}

export default function Card(props: CardProps) {
    const colSpan = () => {
        if (props.contentLength && props.idx) {
            return props.contentLength % 2 !== 0 && props.idx === props.contentLength - 1 ? "col-span-full" : "";
        }

        return "";
    }

    return (
        <div
            key={props.title}
            className={
                `group bg-[#23272f] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2 
                        hover:scale-105 hover:shadow-2xl border border-transparent hover:border-yellow-400 overflow-hidden flex flex-col 
                        ${(colSpan())}
                 `
            }
        >
            {props.tags && props.tags.length > 0 && (
                <div className="mb-2 flex flex-wrap gap-2">
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
            <div className="flex items-center justify-between h-[50px]">
                <h2 className="text-2xl font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                    {props.titleUrl ? (
                        <a href={props.titleUrl} target="_blank">
                            {props.title}
                        </a>
                    ) : (
                        props.title
                    )}
                </h2>
                {props.icon && (
                    <div className="flex-shrink-0 text-yellow-400/70">
                        {<props.icon size="40px"/>}
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
                <div className="text-sm text-gray-400 mb-1">{props.subtitle}</div>
            )}
            {props.description && (
                <p className="text-gray-300">{props.description}</p>
            )}
        </div>
    );
}
