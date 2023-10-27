import React from "react";
import projects from "@/app/projects";
import Link from "next/link";

export default function ProjectList() {

    const project_list = Object.values(projects).map((project: any, index: number) => {
        return <li key={index} className={"mb-4"}>
            <Link href={`/projects/${project.slug}`}
                  className={"light-accent light-link dark:dark-accent dark:dark-link text-2xl font-eigerdals"}>{project.name}</Link>
            <p>{project.excerpt}.</p>
        </li>
    });

    return <ul className={"flex flex-col flex-nowrap mt-7 pl-2"}>
        {project_list}
    </ul>
}