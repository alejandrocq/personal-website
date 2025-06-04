"use client";
import { useState } from "react";
import { technologies } from "@/app/utils/constants";
import Card from "@/app/components/Card";

export default function TechnologiesPage() {
    const [search, setSearch] = useState("");

    const filteredTechnologies = technologies.filter(tech =>
        tech.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="w-full max-w-4xl px-4 py-8">
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search technologies..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-[#23272f] border border-gray-700 text-white focus:outline-none focus:border-yellow-400"
                />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
                {filteredTechnologies.map((tech, idx) => (
                    <Card
                        key={tech.name}
                        title={tech.name}
                        description={tech.description}
                        icon={tech.icon}
                        idx={idx}
                        contentLength={filteredTechnologies.length}
                        tags={tech.tags} // Example params, adjust as needed
                    />
                ))}
            </div>
        </section>
    );
}
