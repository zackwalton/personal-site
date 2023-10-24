'use client'

import React from "react";
import useSWR from "swr";
import LoadingIndicator from "@/components/LoadingIndicator";

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ProjectList() {
    const { data, error, isLoading } = useSWR('/api/projects', fetcher);

    if (isLoading) return <LoadingIndicator message={"Loading projects"} />

    if (error) return <div>Failed to load projects.</div>

    const projects = data.map((project: any, index: number) => {
        return <li key={index} className={"leading-relaxed"}>
            <a href={`/projects/${project.slug}`}
               className={"colourful-link text-2xl font-eigerdals"}>{project.name}</a> - {project.excerpt}
        </li>
    });

    return <ul className={"flex flex-col flex-nowrap mt-7"}>
        {projects}
    </ul>
}