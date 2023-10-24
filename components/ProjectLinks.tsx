'use client'

interface Data {
    info_url?: string
    deployment_url?: string
    repository_url?: string
}

export default function ProjectLinks({info_url, deployment_url, repository_url}: Data) {
  return (
    <div className={"text-gray-500 text-sm font-eigerdals mt-3"}>
      {info_url && info_url.length > 0
        ? <a href={info_url} target="_blank" className="colourful-link font-eigerdals">{info_url}</a>
        : "No info website"}
      <span> · </span>
      {deployment_url && deployment_url.length > 0
        ? <a href={deployment_url} target="_blank" className="colourful-link font-eigerdals">Try it out!</a>
        : "No deployment"}
      <span> · </span>
      {repository_url && repository_url.length > 0
        ? <a href={repository_url} target="_blank" className="colourful-link font-eigerdals">GitHub Repository</a>
        : "GitHub Repository (private)"}
    </div>
  );
}