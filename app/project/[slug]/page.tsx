
import React from 'react';

interface Props {
  params: {
    slug: string
  }
}

export default function Project({params}: Props) {
  const slug = params.slug;

  return <div>
    <a href={"/"} className={"font-bold font-eigerdals underline"}>Home</a><br/>
    <a href={"/"} className={"text-5xl font-bold font-eigerdals colourful"}>{slug}</a>
  </div>
}