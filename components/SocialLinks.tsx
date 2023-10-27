interface SocialLinksProps {
    className?: string;
}

export const GITHUB_URL: string = "https://github.com/zackwalton";
export const LINKEDIN_URL: string = "https://www.linkedin.com/in/walton-zachary/";
export const EMAIL_URL: string = "mailto:zackwalton15@gmail.com";

export default function SocialLinks({ className }: SocialLinksProps) {
    // define social urls


    return <div className={`${className}`}>
        <a href={GITHUB_URL} target={"_blank"}
           className={"light-accent light-link dark:dark-accent dark:dark-link font-eigerdals"}>GitHub</a>&nbsp;·&nbsp;
        <a href={LINKEDIN_URL} target={"_blank"}
           className={"light-accent light-link dark:dark-accent dark:dark-link font-eigerdals"}>LinkedIn</a>&nbsp;·&nbsp;
        <a href={EMAIL_URL}
           className={"light-accent light-link dark:dark-accent dark:dark-link font-eigerdals"}>Email</a>
    </div>
}