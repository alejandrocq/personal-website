import Image from "next/image";
import {experiences} from "@/app/utils/constants";

export default function ExperiencePage() {
    return (
        <section className="w-full max-w-2xl mx-auto px-8 py-8">
            <div className="flex flex-col items-center">
                {experiences.map((exp, idx) => (
                    <div key={exp.company} className="flex flex-col items-center w-full">
                        <div
                            className="group bg-[#23272f] rounded-xl p-6 mb-2 w-full transition-transform duration-300 hover:-translate-y-2
                            hover:scale-105 hover:shadow-2xl border border-transparent hover:border-yellow-400 overflow-hidden flex flex-row items-center"
                        >
                            {exp.logoSrc && (
                                <div className="flex-shrink-0 mr-4">
                                    <Image
                                        src={exp.logoSrc}
                                        width={45}
                                        height={45}
                                        alt={`${exp.company} logo`}
                                        className="opacity-70 object-contain rounded-lg"
                                    />
                                </div>
                            )}
                            <div>
                                <h2 className="text-xl font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                                    {exp.role} @ {exp.company}
                                </h2>
                                <div className="text-sm text-gray-400 mb-1">{exp.period}</div>
                                <p className="text-gray-300">{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
