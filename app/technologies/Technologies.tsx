"use client";
import { useState } from "react";
import { technologies } from "@/app/utils/constants";
import Card from "@/app/components/Card";
import SearchBar from "@/app/components/SearchBar";

export default function Technologies() {
    const [search, setSearch] = useState("");

    const filteredTechnologies = technologies.filter(tech =>
        tech.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="w-full max-w-4xl px-4 py-8">
            <div className="mb-8">
                <SearchBar
                    value={search}
                    onChange={setSearch}
                    placeholder="Search technologies..."
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
                        tags={tech.tags}
                    />
                ))}
            </div>
        </section>
    );
}
