import { Metadata } from "next";

type MetadataParams = {
    title: string;
    description: string;
    path: string;
};

export function getMetadata({ title, description, path }: MetadataParams): Metadata {
    const baseUrl = "https://alejandro-castilla.com";
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: {url: `${baseUrl}/profile.jpg`},
            type: "website",
            url: `${baseUrl}${path}`,
        },
    };
}
