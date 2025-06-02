import type { Metadata } from "next";
import "./globals.css";
import NavLink from "@/app/components/NavLink";

export const metadata: Metadata = {
    title: "Alejandro Castilla Quesada - Portfolio",
    description: "Portfolio of Alejandro Castilla Quesada, showcasing my skills and projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-dark text-gray-100 min-h-screen">
        <header className="w-full flex justify-center py-8">
            <nav className="space-x-5 text-xl font-semibold">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </nav>
        </header>
        <main className="flex flex-col items-center">{children}</main>
        </body>
        </html>
    );
}
