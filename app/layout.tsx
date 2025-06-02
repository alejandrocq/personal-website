import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
                <Link href="/" className="px-3 py-1 rounded hover:bg-blue-500 transition-colors">Home</Link>
                <Link href="/projects" className="px-3 py-1 rounded hover:bg-blue-500 transition-colors">Projects</Link>
                <Link href="/contact" className="px-3 py-1 rounded hover:bg-blue-500 transition-colors">Contact</Link>
            </nav>
        </header>
        <main className="flex flex-col items-center">{children}</main>
        </body>
        </html>
    );
}
