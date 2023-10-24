import { Metadata } from "next";
import { Props } from "./page";
import { ProjectData } from "@/app/types";
import React from "react";
import { promises as sf } from "fs";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const data = await sf.readFile(`public/projects/${params.slug}.json`, "utf-8");
    const project: ProjectData = JSON.parse(data) as ProjectData;

    return {
        title: `Project: ${project.name}`,
        description: project.excerpt,
        keywords: project.technologies
    }
}

export default function ProjectLayout({ children, }: { children: React.ReactNode }) {
    return <>{children}</>;
}