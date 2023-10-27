import { BsQuestionSquare } from "react-icons/bs";
import Link from "next/link";
import React from "react";

export default function ProjectNotFound() {
    return <div className={"flex flex-col items-center justify-center"}>
        <BsQuestionSquare className={"text-4xl md:text-6xl "} />
        <p className={"text-2xl md:text-3xl font-eigerdals mt-10"}>Project not found.</p>
        <div className={"text-sm md:text-lg w-[200px] md:w-[300px] mt-10 text-justify"}>
            <p><em>Happiness can be found even in the darkest of times</em><em>, when one only remembers to turn
                on the light </em><em>. </em></p>
            <p className={"mt-4"}>- Albus Dumbledore</p>
        </div>
        <Link href={"/projects"}
              className={"light-link light-accent dark:dark-link dark:dark-accent hover:underline font-eigerdals mt-10"}>
            ⬅ Projects
        </Link>
    </div>
}