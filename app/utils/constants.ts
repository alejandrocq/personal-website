import {IconType} from "react-icons";
import {FaPlug, FaRunning} from "react-icons/fa";

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
    icon?: IconType;
    description: string;
}

type Experience = {
    company: string;
    role: string;
    period: string;
    description: string;
    logoSrc?: string;
}

export const projects: Project[] = [
    {
        name: "ComedoresUGRbot",
        url: "https://github.com/alejandrocq/ComedoresUGRbot",
        logoSrc: "/comedoresugrbot_logo.png",
        description: `
        Telegram bot (Python/Node.js/Puppeteer) to deliver UGR dining hall menus via subscription. 
        Demonstrates experience with web scraping, bot development, and scaling to a user base of 700+ subscribers.
        `,
    },
    {
        name: "Energy manager",
        url: "https://github.com/alejandrocq/energy-manager",
        icon: FaPlug,
        description: `
        Python-based energy management application (FastAPI/Uvicorn, Vite/React) deployed on a home server to optimize electricity usage. 
        Leverages the Tapo plug API and provides a user interface for plug management and real-time energy consumption data visualization.
        `,
    },
    {
        name: "CloudFit For Wear",
        url: "https://github.com/alejandrocq/cloudfit-for-wear",
        icon: FaRunning,
        description: `
        Android application to monitor physical activity with an Android Wear device and synchronize data with CloudFit platform. 
        This project was developed as part of my final degree project at UGR.
        `
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
        `,
        logoSrc: "/intendia_logo.png"
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
        `,
        logoSrc: "/geotab_logo.jpg"
    },
];
