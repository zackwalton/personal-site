'use client'

import React from 'react';
import ProjectLinks from "@/components/ProjectLinks";
import SocialLinks from "@/components/SocialLinks";
import BackButton from "@/components/BackButton";
import useSWR from "swr";
import LoadingIndicator from "@/components/LoadingIndicator";

export interface Props {
    params: {
        slug: string
    }
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Project({ params }: Props) {
    const { data, error, isLoading } = useSWR(`/api/projects/${params.slug}`, fetcher);

    if (isLoading) return <LoadingIndicator message={"Loading project..."} />
    if (error) return <div>Failed to load project.</div>

    const features = data.features?.map((feature: string, index: number) => {
        return <li key={index}>{feature}</li>
    });

    const technologies = data.technologies.map((technology: string, index: number) => {
        let string = technology
        if (index !== data.technologies.length - 1) {
            string += " · "
        }
        return string
    });


    return <div>
        <BackButton projectName={data.name} />
        <div className={"mt-10"}>
            <a href={"/"} className={"text-5xl font-eigerdals colourful"}>{data.name}</a>
        </div>
        <ProjectLinks info_url={data.info_url}
                      deployment_url={data.deployment_url}
                      repository_url={data.repository_url} />
        <p className={"mt-7"}>{data.excerpt}.</p>
        <p className={"mt-7"}>{data.description}</p>
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