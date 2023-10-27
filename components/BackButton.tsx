'use client'

import React from "react";
import Link from "next/link";

interface Props {
    projectName?: string
}

export default function BackButton({ projectName }: Props) {
    if (projectName) {
        return <p className={"font-eigerdals text-sm md:text-lg"}>
            <Link href={"/"} className={"hover:underline"}>Home</Link>
            <span className={"light-accent dark:dark-accent"}> / </span>
            <Link href={"/projects"} className={"hover:underline"}>Projects</Link>
            <span className={"light-accent dark:dark-accent"}> / </span>{projectName}
        </p>
    }

    return <p className={"font-eigerdals text-sm md:text-lg"}>
        <Link href={"/"} className={"hover:underline"}>Home</Link>
        <span className={"light-accent dark:dark-accent"}> / </span>Projects
    </p>
}