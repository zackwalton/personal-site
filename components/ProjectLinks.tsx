'use client'

interface Data {
    info_url?: string
    deployment_url?: string
    repository_url?: string
}

export default function ProjectLinks({ info_url, deployment_url, repository_url }: Data) {
    return (
        <div className={"flex flex-col md:flex-row text-gray-500 text-sm font-eigerdals mt-3"}>
            {info_url && info_url.length > 0
                ? <span><a href={"https://" + info_url} target="_blank"
                           className="light-accent light-link dark:dark-accent dark:dark-link font-eigerdals">{info_url}
                </a>&nbsp;·&nbsp;</span>
                : <p className={"hidden md:inline"}>No info website&nbsp;·&nbsp;</p>}
            {deployment_url && deployment_url.length > 0
                ? <span><a href={deployment_url} target="_blank"
                           className="light-accent light-link dark:dark-accent dark:dark-link  font-eigerdals">
                    Try it out!</a>&nbsp;·&nbsp;</span>
                : <p className={"hidden md:inline"}>No deployment&nbsp;·&nbsp;</p>}
            {repository_url && repository_url.length > 0
                ? <a href={repository_url} target="_blank"
                     className="light-accent light-link dark:dark-accent dark:dark-link font-eigerdals">
                    GitHub Repository</a>
                : <p>GitHub Repository (private)</p>}
        </div>
    );
}