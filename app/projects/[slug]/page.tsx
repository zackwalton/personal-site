import React from 'react';
import ProjectLinks from "@/components/ProjectLinks";
import SocialLinks from "@/components/SocialLinks";
import BackButton from "@/components/BackButton";
import { Metadata } from "next";
import projects from "@/app/projects";

export interface Props {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return Object.values(projects).map((project: any) => ({
        params: { slug: project.slug },
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = projects[params.slug]

    return {
        title: `Project | ${project.name}`,
        description: project.excerpt,
        keywords: project.technologies
    }
}

export default async function Project({ params }: Props) {

    const project = projects[params.slug]

    const features = project.features?.map((feature: string, index: number) => {
        return <li key={index} className={"mt-4"}>{feature}</li>
    });

    const technologies = project.technologies.map((technology: string, index: number) => {
        let string = technology
        if (index !== project.technologies.length - 1)
            string += " · "
        return string
    });


    return <div>
        <BackButton projectName={project.name} />
        <p className={"text-3xl md:text-5xl font-eigerdals light-accent dark:dark-accent mt-5 pb-2 md:mt-10"}>{project.name}</p>
        <ProjectLinks info_url={project.info_url}
                      deployment_url={project.deployment_url}
                      repository_url={project.repository_url} />
        <p className={"mt-5"}>{project.excerpt}.</p>
        <p className={"light-accent dark:dark-accent font-eigerdals mt-14 text-xl"}>Features:</p>
        <ul className={"list-disc pl-8"}>
            {features}
        </ul>

        <p className={"hidden md:block light-accent dark:dark-accent font-eigerdals mt-7 text-xl mb-4"}>
            Languages, Frameworks, & Libraries:</p>
        <p className={"block md:hidden light-accent dark:dark-accent font-eigerdals mt-7 text-xl mb-4"}>
            Languages & Frameworks:</p>
        <p className={"pl-8"}>{technologies}</p>
        <div className={"mt-14"}>Connect with me!<SocialLinks className={"mt-4 pb-4 pl-6"} /></div>
    </div>
}