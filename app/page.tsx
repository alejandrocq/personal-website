import Image from "next/image";
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";
import {aboutMe} from "@/app/utils/constants";
import Link from "next/link";

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
                    <Link href="https://www.linkedin.com/in/alejandrocq/" target="_blank" aria-label="LinkedIn" className="hover:text-red-700 transition-colors"><FaLinkedin/></Link>
                    <Link href="https://github.com/alejandrocq" target="_blank" aria-label="GitHub" className="hover:text-red-700 transition-colors"><FaGithub/></Link>
                    <Link href="mailto:contacto@alejandro-castilla.com" target="_blank" aria-label="E-mail" className="hover:text-red-700 transition-colors"><FaEnvelope/></Link>
                </div>

                <p className="text-lg text-gray-100 text-justify tracking-tight">
                    {aboutMe}
                </p>
            </section>
        </>
    );
}
