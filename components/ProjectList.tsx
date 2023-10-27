'use client'

import React from "react";
import useSWR from "swr";
import LoadingIndicator from "@/components/LoadingIndicator";

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ProjectList() {
    const { data, error, isLoading } = useSWR('/api/projects', fetcher, { dedupingInterval: 60000});

    if (isLoading) return <LoadingIndicator message={"Loading projects"} />

    if (error) return <div>Failed to load projects.</div>

    const projects = data.map((project: any, index: number) => {
        return <li key={index} className={"mb-4"}>
            <a href={`/projects/${project.slug}`}
               className={"light-accent light-link dark:dark-accent dark:dark-link text-2xl font-eigerdals"}>{project.name}</a>
            <p>{project.excerpt}.</p>
        </li>
    });

    return <ul className={"flex flex-col flex-nowrap mt-7 pl-2"}>
        {projects}
    </ul>
}