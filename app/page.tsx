export default function Home() {

    // define social urls
    const github: string = "https://github.com/zackwalton";
    const linkedIn: string = "https://www.linkedin.com/in/walton-zachary/";
    const email: string = "mailto:zackwalton15@gmail.com";
    return (
        <div>
            <a href={"/"} className={"text-5xl font-bold font-eigerdals"}>Zachary <span
                className={"colourful"}>Walton</span></a>
            <p className={"mt-24"}>
                I’m from <span className={"italic"}>Ottawa, Ontario</span> living in <span className={"italic"}>Montréal, Canada</span>.<br />
                I study Computer Science at Concordia University.<br />
                I build full-stack web and python applications!</p>


            <div className={"mt-32"}>
                <a href="project/disclate" className={"colourful-link text-6xl font-eigerdals"}
                   style={{lineHeight: "1.3em"}}>disclate<strong>, translation bot</strong></a>
                <p className={"text-xs text-gray-500 pl-5"}>Python, SQL, Discord API, Google Cloud Translation API,
                    GPT-4 API</p><br />

                <a href="project/planning-poker" className={"colourful-link text-6xl font-eigerdals"}
                   style={{lineHeight: "1.3em"}}>sprint plan <strong>&</strong> websockets</a><br />
                <p className={"text-xs text-gray-500 pl-5"}>Web Sockets (socket.io), Next.js, React, Redis, MUI</p>
                <br />

                <a href="#" className={"colourful-link text-6xl font-eigerdals"} style={{lineHeight: "1.3em"}}>
                    security <strong>, </strong>graphics<strong> & </strong>more</a>
                <p className={"text-xs text-gray-500 pl-5"}>More projects!</p><br />

            </div>
            <div className={"mt-32 font-bold"}>
                <a href={github} target={"_blank"} className={"colourful-link"}>GitHub</a>&nbsp;·&nbsp;
                <a href={linkedIn} target={"_blank"} className={"colourful-link"}>LinkedIn</a>&nbsp;·&nbsp;
                <a href={email} target={"_blank"} className={"colourful-link"}>Email</a>
            </div>
        </div>
    )
}
