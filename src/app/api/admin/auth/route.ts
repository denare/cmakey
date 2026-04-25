import { NextResponse } from "next/server";
import { getAdminProfile, logActivity } from "@/lib/db";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const profile = await getAdminProfile();
  
  if (username === profile.username && password === profile.password) {
    await logActivity("auth", "Admin Login", `Successful login for user: ${username}`);
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
  
  await logActivity("auth", "Failed Login Attempt", `Unsuccessful login attempt for user: ${username}`);
  return NextResponse.json({ success: false, error: "Invalid username or password" }, { status: 401 });
}
