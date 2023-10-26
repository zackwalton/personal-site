import SocialLinks from "@/components/SocialLinks";
import React from "react";

export default function Home() {

    return (
        <div>
            <a href={"/"} className={"text-5xl font-bold font-eigerdals"}>Zachary <span
                className={"light-accent dark:dark-accent"}>Walton</span></a>
            <p className={"mt-24"}>
                I’m from <span className={"italic"}>Ottawa, Ontario</span> living in <span className={"italic"}>Montréal, Canada</span>.<br />
                I study Computer Science at Concordia University.<br />
                I build full-stack web and python applications!</p>


            <div className={"mt-32"}>
                <a href="projects/disclate" className={"light-accent light-link dark:dark-accent dark:dark-link text-6xl font-eigerdals"}
                   style={{ lineHeight: "1.3em" }}>disclate<strong>, translation bot</strong></a>
                <p className={"text-xs text-gray-500 pl-5"}>Python, SQL, Discord API, Google Cloud Translation API,
                    GPT-4 API</p><br />

                <a href="projects/planning-poker" className={"light-accent light-link dark:dark-accent dark:dark-link text-6xl font-eigerdals"}
                   style={{ lineHeight: "1.3em" }}>sprint plan <strong>&</strong> websockets</a><br />
                <p className={"text-xs text-gray-500 pl-5"}>Web Sockets (socket.io), Next.js, React, Redis, MUI</p>
                <br />

                <a href="projects/" className={"light-accent light-link dark:dark-accent dark:dark-link text-6xl font-eigerdals"}
                   style={{ lineHeight: "1.3em" }}>security <strong>, </strong>graphics<strong> & </strong>more</a>
                <p className={"text-xs text-gray-500 pl-5"}>More projects!</p><br />

            </div>
            <SocialLinks className={"mt-32 pb-4"} />
        </div>
    )
}
