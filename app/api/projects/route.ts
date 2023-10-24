import fs from "fs";
import { NextResponse } from "next/server";
import { ProjectData } from "@/app/types";


export async function GET(): Promise<NextResponse<ProjectData[]>> {
    const fileNames = fs.readdirSync('public/projects');

    const data: ProjectData[] = fileNames.map((file) => {
        if (file.endsWith(".json"))
            return JSON.parse(fs.readFileSync(`public/projects/${file}`, 'utf8'));
    });

    return NextResponse.json(data);
}

