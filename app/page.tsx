import SocialLinks from "@/components/SocialLinks";
import React from "react";
import Link from "next/link";


export default function Home() {

    // this avoids 'Cannot resolve file projects/(slug)' warning
    const project1 = 'disclate';
    const project2 = 'planning-poker';

    return (
        <div className={"flex flex-col justify-items-start"}>
            <Link href={"/"}
                  className={"text-4xl md:text-5xl font-bold font-eigerdals text-center md:text-left md:pl-3"}>Zachary
                <span className={"light-accent dark:dark-accent"}> Walton</span></Link>
            <div className={"flex flex-col gap-3 md:gap-1 text-center md:text-left leading-6 md:leading-6 md:pl-3"}>
                <p className={"mt-20"}>
                    I’m from <span className={"italic"}>Ottawa, Ontario</span> living in
                    <span className={"italic"}> Montréal, Canada</span>.
                </p>
                <p>I study Computer Science at Concordia University.</p>
                <p>I build full-stack web and python applications!</p>
            </div>


            <div className={"mt-24 text-xl md:text-5xl lg:text-6xl text-gray-500"} style={{ lineHeight: "0.75em" }}>
                <Link href={`projects/${project1}`}
                      className={"light-accent light-link dark:dark-accent dark:dark-link font-eigerdals"}
                >disclate<strong>, translation bot</strong></Link>
                <p className={"text-xs pl-2 md:pl-5 pt-1 md:pt-5"}>
                    Python, SQL, Discord API, Google Cloud Translation API, GPT-4 API
                </p><br />

                <Link href={`projects/${project2}`}
                      className={"light-accent light-link dark:dark-accent dark:dark-link "}>
                    sprint plan <strong>&</strong> websockets</Link><br />
                <p className={"text-xs pl-2 md:pl-5 pt-1 md:pt-5"}>
                    Web Sockets (socket.io), Next.js, React, Redis, MUI
                </p><br />

                <Link href="projects/"
                      className={"light-accent light-link dark:dark-accent dark:dark-link font-eigerdals"}>
                    security <strong>, </strong>graphics<strong> & </strong>more</Link>
                <p className={"text-xs pl-2 md:pl-5 pt-1 md:pt-5"}>More projects!</p><br />
            </div>
            <SocialLinks className={"mt-32 pb-4"} />
        </div>
    )
}
