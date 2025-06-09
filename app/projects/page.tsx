import {projects} from "@/app/utils/constants";
import Card from "@/app/components/Card";
import {Metadata} from "next";
import { getMetadata } from "@/app/utils/utilities";

export const metadata: Metadata = getMetadata({
    title: "Projects - Alejandro Castilla Quesada",
    description: "Explore the projects I've worked on, showcasing my skills in software development and problem-solving.",
    path: "/projects",
});

export default function ProjectsPage() {
    return (
        <section className="w-full max-w-4xl px-4 py-8">
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, idx) => (
                    <Card
                        key={project.name}
                        title={project.name}
                        url={project.url}
                        description={project.description}
                        logoSrc={project.logoSrc}
                        icon={project.icon}
                        idx={idx}
                        contentLength={projects.length}
                    />
                ))}
            </div>
        </section>
    );
}
