import type { Metadata } from "next";
import "./globals.css";
import NavLink from "@/app/components/NavLink";
import { Roboto } from 'next/font/google'
import Footer from "@/app/components/Footer";

const font = Roboto({
    subsets: ['latin'],
})

const description = "Portfolio of Alejandro Castilla Quesada, showcasing my skills and projects.";
export const metadata: Metadata = {
    title: "Alejandro Castilla Quesada - Portfolio",
    description: description,
    openGraph: {
        title: "Alejandro Castilla Quesada | Portfolio",
        description: description,
        images: ["/profile.jpg"],
        type: "website",
        url: "https://alejandro-castilla.com",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={font.className}>
        <body className="bg-dark text-gray-100 min-h-screen">
        <header className="w-full flex justify-center py-8">
            <nav className="space-x-5 text-xl font-semibold overflow-auto flex align-middle p-2">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/technologies">Technologies</NavLink>
                <NavLink href="/experience">Experience</NavLink>
            </nav>
        </header>
        <main className="flex flex-col items-center">{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
