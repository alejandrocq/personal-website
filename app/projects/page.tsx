import {projects} from "@/app/utils/constants";
import Card from "@/app/components/Card";

export default function ProjectsPage() {
    return (
        <section className="w-full max-w-4xl px-4 py-8">
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, idx) => (
                    <Card
                        key={project.name}
                        title={project.name}
                        titleUrl={project.url}
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
