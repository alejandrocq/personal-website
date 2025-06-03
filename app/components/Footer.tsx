import { SiNextdotjs } from "react-icons/si";
import {FaServer} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full text-center text-sm text-gray-400 mt-10 mb-4">
            <span><SiNextdotjs className="inline-block align-middle mr-1"/>Built using Next.js</span>
            <span className="ml-2 mr-2">/</span>
            <span><FaServer className="inline-block align-middle mr-1"/>Hosted on my home server</span>
        </footer>
    );
}
