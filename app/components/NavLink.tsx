'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";

export default function NavLink({href, children}: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            className={`px-3 py-1 rounded hover:bg-red-900 transition-colors ${isActive ? " bg-red-900" : ""}`}
        >
            {children}
        </Link>
    );
}
