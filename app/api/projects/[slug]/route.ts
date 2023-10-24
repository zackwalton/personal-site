import { NextResponse } from "next/server";
import { ProjectData } from "@/app/types";
import { promises as sf } from "fs";

interface Context {
    params: {
        slug: string
    }
}


export async function GET(request: Request, { params }: Context): Promise<NextResponse<ProjectData>> {
    const data = await sf.readFile(process.cwd() + `/public/projects/${params.slug}.json`, "utf-8");
    const project: ProjectData = JSON.parse(data) as ProjectData;

    return NextResponse.json(project);
}