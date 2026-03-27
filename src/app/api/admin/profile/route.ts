import { NextResponse } from "next/server";
import { getAdminProfile, updateAdminProfile, logActivity } from "@/lib/db";

export async function GET() {
  const profile = await getAdminProfile();
  // Don't expose password
  return NextResponse.json({ username: profile.username });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await updateAdminProfile(data);
    await logActivity("auth", "Profile Updated", "Admin profile settings were modified.");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
