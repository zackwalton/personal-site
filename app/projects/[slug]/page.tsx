import React from 'react';
import ProjectLinks from "@/components/ProjectLinks";
import SocialLinks from "@/components/SocialLinks";
import BackButton from "@/components/BackButton";
import { promises as sf, promises as fs } from "fs";
import { ProjectData } from "@/app/types";
import { Metadata } from "next";

export interface Props {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const data = await sf.readFile(`public/projects/${params.slug}.json`, "utf-8");
    const project: ProjectData = JSON.parse(data) as ProjectData;

    return {
        title: `Project: ${project.name}`,
        description: project.excerpt,
        keywords: project.technologies
    }
}

export default async function Project({ params }: Props) {
    const data = await fs.readFile(process.cwd() + `/public/projects/${params.slug}.json`, "utf-8");
    const project: ProjectData = JSON.parse(data) as ProjectData;

    const features = project.features?.map((feature: string, index: number) => {
        return <li key={index}>{feature}</li>
    });

    const technologies = project.technologies.map((technology: string, index: number) => {
        let string = technology
        if (index !== project.technologies.length - 1) {
            string += " · "
        }
        return string
    });


    return <div>
        <BackButton projectName={project.name} />
        <div className={"mt-10"}>
            <a href={"/"} className={"text-5xl font-eigerdals colourful"}>{project.name}</a>
        </div>
        <ProjectLinks info_url={project.info_url}
                      deployment_url={project.deployment_url}
                      repository_url={project.repository_url} />
        <p className={"mt-5"}>{project.excerpt}.</p>
        <p className={"mt-7"}>{project.description}</p>
        <p className={"mt-14 text-xl colourful font-eigerdals"}>Features:</p>
        <ul className={"list-disc pl-8 leading-10"}>
            {features}
        </ul>

        <p className={"mt-7 text-xl colourful font-eigerdals"}>Languages, Frameworks, and Libraries:</p>
        <p className={"pl-8 leading-10"}>{technologies}</p>
        <div className={"mt-14"}>
            Still curious? Reach out to me:
            <SocialLinks className={"mt-4 pb-4 pl-6"} />
        </div>
    </div>
}