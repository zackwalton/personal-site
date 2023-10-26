interface SocialLinksProps {
    className: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
    // define social urls
    const github: string = "https://github.com/zackwalton";
    const linkedIn: string = "https://www.linkedin.com/in/walton-zachary/";
    const email: string = "mailto:zackwalton15@gmail.com";

    return <div className={`${className}`}>
                <a href={github} target={"_blank"} className={"light-accent light-link dark:dark-accent dark:dark-link font-eigerdals"}>GitHub</a>&nbsp;·&nbsp;
                <a href={linkedIn} target={"_blank"} className={"light-accent light-link dark:dark-accent dark:dark-link font-eigerdals"}>LinkedIn</a>&nbsp;·&nbsp;
                <a href={email} target={"_blank"} className={"light-accent light-link dark:dark-accent dark:dark-link font-eigerdals"}>Email</a>
            </div>
}