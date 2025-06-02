import Image from "next/image";
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";
import {aboutMe, footerText} from "@/app/utils/constants";

export default function Home() {
    return (
        <>
            <section className="flex flex-col items-center mt-6 max-w-4xl text-center p-6">
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
                    <a href="https://www.linkedin.com/in/alejandrocq/" aria-label="LinkedIn" className="hover:text-red-900 transition-colors"><FaLinkedin/></a>
                    <a href="https://github.com/alejandrocq" aria-label="GitHub" className="hover:text-red-900 transition-colors"><FaGithub/></a>
                    <a href="mailto:contacto@alejandro-castilla.com" aria-label="E-mail" className="hover:text-red-900 transition-colors"><FaEnvelope/></a>
                </div>

                <p className="text-lg text-gray-100 text-justify">
                    {aboutMe}
                </p>
            </section>
            <footer className="w-full text-center text-sm text-gray-400 mt-10 mb-4">
                {footerText}
            </footer>
        </>
    );
}
