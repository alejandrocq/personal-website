import { Metadata } from "next";
import Technologies from "./Technologies";
import { getMetadata } from "@/app/utils/utilities";

export const metadata: Metadata = getMetadata({
    title: "Technologies - Alejandro Castilla Quesada",
    description: "Technologies and tools used by Alejandro Castilla Quesada.",
    path: "/technologies",
});

export default function TechnologiesPage() {
    return <Technologies />;
}
