import React from "react";
import ProjectList from "@/components/ProjectList";
import BackButton from "@/components/BackButton";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Zachary Walton | Projects',
    description: 'Hey, I\'m Zack! I am a software developer from Ottawa. I study Computer Science at ' +
        'Concordia University. Check out my experience and personal projects!',
}

export default function Projects() {
    return <div>
        <BackButton />
        <p className={"text-5xl font-eigerdals mt-10"}>Projects:</p>
        <div className={"flex flex-col flex-nowrap"}>
            <ProjectList />
        </div>
    </div>
}