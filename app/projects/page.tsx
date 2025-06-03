import Image from "next/image";
import {projects} from "@/app/utils/constants";

export default function ProjectsPage() {
    return (
        <section className="w-full max-w-4xl px-4 py-8">
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, idx) => (
                    <div
                        key={project.url}
                        className={
                            `group bg-[#23272f] rounded-xl p-6 transition-transform duration-300 hover:-translate-y-2 
                        hover:scale-105 hover:shadow-2xl border border-transparent hover:border-red-700 overflow-hidden flex flex-col 
                        ${projects.length % 2 !== 0 /*odd*/ && idx === projects.length - 1 /*last*/ ? "col-span-full" : ""}
                        `}
                    >
                        <div className="flex items-center justify-between h-[50px]">
                            <h2 className="text-2xl font-semibold group-hover:text-red-700 transition-colors duration-300">
                                <a href={project.url} target="_blank" className="decoration-red-700 hover:decoration-2">
                                    {project.name}
                                </a>
                            </h2>
                            {project.logoSrc && (
                                <div className="flex-shrink-0">
                                    <Image
                                        src={project.logoSrc}
                                        width={45}
                                        height={45}
                                        alt={`${project.name} logo`}
                                        className="opacity-70 object-contain rounded-lg"
                                    />
                                </div>
                            )}
                            {project.icon && (
                                <div className="flex-shrink-0">
                                    {<project.icon size="40px" opacity="0.7"/>}
                                </div>
                            )}
                        </div>
                        <p className="text-gray-300">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
