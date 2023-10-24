import React from 'react';
import { promises as sf } from "fs";
import ProjectLinks from "@/components/ProjectLinks";
import SocialLinks from "@/components/SocialLinks";

interface Props {
    params: {
        slug: string
    }
}

interface ProjectData {
    name: string
    slug: string
    info_url: string
    deployment_url: string
    repository_url: string
    excerpt: string
    description: string
    features: string[]
    technologies: string[]
}

export default async function Project({params}: Props) {
    const slug = params.slug;
    const data = await sf.readFile(`public/projects/${slug}.json`, "utf-8");
    const project: ProjectData = JSON.parse(data) as ProjectData;

    const features = project.features?.map((feature, index) => {
        return <li key={index}>{feature}</li>
    });

    const technologies = project.technologies.map((technology, index) => {
        let string = technology
        if (index !== project.technologies.length - 1) {
            string += " · "
        }
        return string
    });

    return <div>
        <a href={"/"} className={"font-eigerdals"}>⬅ Zachary Walton</a><br />
        <div className={"mt-10"}>
            <a href={"/"} className={"text-5xl font-eigerdals colourful"}>{project.name}</a>
        </div>
        <ProjectLinks info_url={project.info_url}
                      deployment_url={project.deployment_url}
                      repository_url={project.repository_url} />
        <p className={"mt-7"}>{project.excerpt}.</p>
        <p className={"mt-7"}>{project.description}</p>
        <p className={"mt-7 text-xl colourful font-eigerdals"}>Features:</p>
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