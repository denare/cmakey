import { NextResponse } from "next/server";
import { readDB, writeDB } from "@/lib/db";

export async function GET() {
  const data = await readDB();
  return NextResponse.json(data.projects);
}

export async function POST(request: Request) {
  try {
    const project = await request.json();
    const data = await readDB();
    
    const index = data.projects.findIndex((p) => p.id === project.id);
    if (index !== -1) {
      data.projects[index] = project;
    } else {
      data.projects.push({ ...project, id: Date.now().toString() });
    }
    
    await writeDB(data);
    return NextResponse.json({ success: true, project });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to save project" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  
  if (!id) return NextResponse.json({ success: false, error: "ID is required" }, { status: 400 });

  const data = await readDB();
  data.projects = data.projects.filter((p) => p.id !== id);
  await writeDB(data);
  
  return NextResponse.json({ success: true });
}
