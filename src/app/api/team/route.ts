import { NextResponse } from "next/server";
import { getTeamMembers, saveTeamMember, deleteTeamMember } from "@/lib/db";
import { TeamMember } from "@/types";

export async function GET() {
  try {
    const team = await getTeamMembers();
    return NextResponse.json(team || []);
  } catch (error) {
    console.error("Failed to fetch team:", error);
    return NextResponse.json({ error: "Failed to fetch team" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data: Partial<TeamMember> = await request.json();
    if (!data.name || !data.role) {
      return NextResponse.json({ error: "Name and role are required" }, { status: 400 });
    }
    
    await saveTeamMember(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to save member:", error);
    return NextResponse.json({ error: "Failed to save team member" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await deleteTeamMember(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete member:", error);
    return NextResponse.json({ error: "Failed to delete team member" }, { status: 500 });
  }
}
