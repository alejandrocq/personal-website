import {FaArrowDown} from "react-icons/fa";
import {experiences} from "@/app/utils/constants";
import Card from "@/app/components/Card";

export default function ExperiencePage() {
    return (
        <section className="w-full max-w-2xl mx-auto px-8 py-8">
            <div className="flex flex-col items-center">
                {experiences.map((exp, idx) => (
                    <div key={exp.company} className="flex flex-col items-center w-full">
                        <Card
                            title={`${exp.role} @ ${exp.company}`}
                            subtitle={exp.period}
                            description={exp.description}
                            logoSrc={exp.logoSrc}
                            tags={exp.tags}
                        />
                        {idx < experiences.length - 1 && (
                            <div className="flex flex-col items-center">
                                <FaArrowDown size={30} className="text-yellow-400 m-6" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
