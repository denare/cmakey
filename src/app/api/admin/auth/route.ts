import { NextResponse } from "next/server";
import { getAdminProfile, logActivity } from "@/lib/db";

export async function POST(request: Request) {
  const { password } = await request.json();
  const profile = await getAdminProfile();
  
  if (password === profile.password) {
    await logActivity("auth", "Admin Login", "Successful login to the admin panel.");
    const response = NextResponse.json({ success: true });
    // In a real app, set an HTTP-only cookie here
    response.cookies.set("admin_session", "active", {
       httpOnly: false, // Accessible by AdminLayout.tsx
       secure: process.env.NODE_ENV === "production",
       maxAge: 60 * 60 * 24, // 1 day
       path: "/",
    });
    return response;
  }
  
  await logActivity("auth", "Failed Login Attempt", "An unsuccessful attempt was made to access the admin panel.");
  return NextResponse.json({ success: false, error: "Invalid password" }, { status: 401 });
}
