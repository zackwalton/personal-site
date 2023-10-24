interface SocialLinksProps {
    className: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
    // define social urls
    const github: string = "https://github.com/zackwalton";
    const linkedIn: string = "https://www.linkedin.com/in/walton-zachary/";
    const email: string = "mailto:zackwalton15@gmail.com";

    return <div className={`${className}`}>
                <a href={github} target={"_blank"} className={"colourful-link"}>GitHub</a>&nbsp;·&nbsp;
                <a href={linkedIn} target={"_blank"} className={"colourful-link"}>LinkedIn</a>&nbsp;·&nbsp;
                <a href={email} target={"_blank"} className={"colourful-link"}>Email</a>
            </div>
}