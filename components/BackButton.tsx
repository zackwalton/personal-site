'use client'

import React from "react";

interface Props {
    projectName?: string
}

export default function BackButton({ projectName }: Props) {
    if (projectName) {
        return <p className={"font-eigerdals"}>
            <a href={"/"} className={"hover:underline"}>Home</a><span className={"light-accent dark:dark-accent"}> / </span>
            <a href={"/projects"} className={"hover:underline"}>Projects</a><span
            className={"light-accent dark:dark-accent"}> / </span>{projectName}
        </p>
    }

    return <p className={"font-eigerdals"}>
        <a href={"/"} className={"hover:underline"}>Home</a><span className={"light-accent dark:dark-accent"}> / </span>Projects
    </p>
}