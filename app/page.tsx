import Image from "next/image";
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";

export default function Home() {
    return (
        <section className="flex flex-col items-center mt-6 max-w-2xl text-center">
            <Image
                src="/profile.jpg"
                alt="Profile photo"
                width={200}
                height={200}
                className="rounded-full mb-6 border-gray-700"
            />
            <h1 className="text-4xl font-bold">Alejandro Castilla Quesada</h1>
            <h2 className="mt-2 text-2xl text-gray-400 font-semibold">
                Senior Software Developer @ GEOTAB
            </h2>

            <div className="flex space-x-3 mt-5 mb-8 justify-center text-gray-300 text-2xl">
                <a href="#" aria-label="LinkedIn" className="hover:text-red-900 transition-colors"><FaLinkedin/></a>
                <a href="#" aria-label="GitHub" className="hover:text-red-900 transition-colors"><FaGithub/></a>
                <a href="mailto:your.email@example.com" aria-label="E-mail" className="hover:text-red-900 transition-colors"><FaEnvelope/></a>
            </div>

            <p className="text-lg text-gray-100 text-justify">
                I am Alejandro, an experienced Software Developer with a proven track record of delivering impactful solutions within the fleet management industry. As a Senior Software Developer at Geotab, I leverage my expertise in Java, C#, and TypeScript to maintain and enhance a leading-edge compliance platform, originally developed at Intendia. My focus includes real-time data ingestion, algorithm optimization, ensuring adherence to evolving regulatory requirements, and developing performant and user-friendly interfaces. I am deeply committed to continuous improvement, both in the code I write and the practices of the team around me, and to a culture of mentorship and knowledge sharing.
            </p>
        </section>
    );
}
