import {FaDocker, FaGoogle, FaJava, FaPlug, FaRunning} from "react-icons/fa";
import {SiJavascript, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiReactivex, SiTypescript} from "react-icons/si";
import {TbBrandCSharp} from "react-icons/tb";
import {ReactNode} from "react";

export const aboutMe = `
I am Alejandro, an experienced Software Developer with a proven track record of delivering impactful solutions within the
fleet management industry. As a Senior Software Developer at Geotab, I leverage my expertise in Java, C#, and TypeScript
to maintain and enhance a leading-edge compliance platform, originally developed at Intendia. My focus includes real-time data
ingestion, algorithm optimization, ensuring adherence to evolving regulatory requirements, and developing performant and
user-friendly interfaces. I am deeply committed to continuous improvement, both in the code I write and the practices of the team
around me, and to a culture of mentorship and knowledge sharing.
`;

type Project = {
    name: string;
    url: string;
    logoSrc?: string;
    icon?: ReactNode;
    description: string;
}

type Experience = {
    company: string;
    role: string;
    period: string;
    description: string;
    logoSrc?: string;
    tags?: string[]; // Added tags property
}

type Technology = {
    name: string;
    description?: string;
    icon: ReactNode;
    tags?: string[];
}

export const projects: Project[] = [
    {
        name: "ComedoresUGRbot",
        url: "https://github.com/alejandrocq/ComedoresUGRbot",
        logoSrc: "/comedoresugrbot_logo.png",
        description: `
        Telegram bot (Python/Node.js/Puppeteer) to deliver UGR dining hall menus via subscription. 
        Demonstrates experience with web scraping, bot development, and scaling to a user base of 700+ subscribers.
        `.trim(),
    },
    {
        name: "Energy manager",
        url: "https://github.com/alejandrocq/energy-manager",
        icon: <FaPlug size={40}/>,
        description: `
        Python-based energy management application (FastAPI/Uvicorn, Vite/React) deployed on a home server to optimize electricity usage. 
        Leverages the Tapo plug API and provides a user interface for plug management and real-time energy consumption data visualization.
        `.trim(),
    },
    {
        name: "CloudFit For Wear",
        url: "https://github.com/alejandrocq/cloudfit-for-wear",
        icon: <FaRunning size={40}/>,
        description: `
        Android application to monitor physical activity with an Android Wear device and synchronize data with CloudFit platform. 
        This project was developed as part of my final degree project at UGR.
        `.trim()
    }
];

export const experiences: Experience[] = [
    {
        company: "Intendia",
        role: "Software Developer",
        period: "August 2016 - October 2019",
        description: `
            Developed and maintained a European tachograph compliance platform written in Java utilizing
            Google Web Toolkit (GWT). This platform handled real-time and historical data, ultimately
            presented to customers through location data, tachograph data, and driver infringement reports. 
        `.trim(),
        logoSrc: "/intendia_logo.png",
        tags: ["Java", "Google Web Toolkit (GWT)", "RxJava", "JavaScript"]
    },
    {
        company: "GEOTAB",
        role: "Senior Software Developer",
        period: "October 2019 - Present",
        description: `
            Transitioned to Geotab following the acquisition of Intendia, where I’m responsible for
            maintaining and enhancing a fleet management platform initially developed by Intendia. I now
            collaborate on both the original Java/JEE/GWT platform and Geotab’s primary C#/TypeScript
            platform, ensuring seamless integration. My focus includes real-time data ingestion and
            development of critical features impacting customer experience and compliance.
        `.trim(),
        logoSrc: "/geotab_logo.jpg",
        tags: ["Java", "Google Web Toolkit (GWT)", "RxJava", "C#", "TypeScript", "JavaScript", "React", "Docker"]
    },
];

export const technologies : Technology[] = [
    {
        name: "Java",
        icon: <FaJava size={40}/>,
        description: "Primary language I have used for backend development @GEOTAB and @Intendia.",
        tags: ["Professional", "Personal"],
    },
    {
        name: "Google Web Toolkit (GWT)",
        icon: <FaGoogle size={40}/>,
        description: "Framework for building complex web applications using Java on both backend and frontend (which gets transpiled to JavaScript).",
        tags: ["Professional"],
    },
    {
        name: "RxJava",
        icon: <SiReactivex size={40}/>,
        description: "Used for reactive programming in a Java backend @GEOTAB and @Intendia, allowing for asynchronous and event-driven programming.",
        tags: ["Professional"],
    },
    {
        name: "C#",
        icon: <TbBrandCSharp size={40}/>,
        description: "Used for backend development in Geotab's platform.",
        tags: ["Professional"],
    },

    {
        name: "JavaScript",
        icon: <SiJavascript size={40}/>,
        description: "Used for frontend development @GEOTAB and @Intendia. I have deep knowledge of the language and modern browser APIs.",
        tags: ["Professional", "Personal"],
    },
    {
        name: "TypeScript",
        icon: <SiTypescript size={40}/>,
        description: "Used for frontend development @GEOTAB, and also in my personal projects.",
        tags: ["Professional", "Personal"],
    },
    {
        name: "Python",
        icon: <SiPython size={40}/>,
        description: "Used for backend development in my personal projects, such as ComedoresUGRbot or Energy manager.",
        tags: ["Personal"],
    },
    {
        name: "Docker",
        icon: <FaDocker size={40}/>,
        description: "Used for containerizing applications at GEOTAB and also for some of my personal projects like Energy manager or this portfolio.",
        tags: ["Professional", "Personal"],
    },
    {
        name: "React",
        icon: <SiReact size={40}/>,
        description: "Used for frontend development @GEOTAB and also some of my personal projects.",
        tags: ["Professional", "Personal"],
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs size={40}/>,
        description: "Used for building this portfolio.",
        tags: ["Personal"],
    },
    {
        name: "Node.js",
        icon: <SiNodedotjs size={40}/>,
        description: "Used for backend development in my personal projects.",
        tags: ["Personal"],
    },
];
