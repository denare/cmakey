import { NextResponse } from "next/server";
import { getMessages } from "@/lib/db";

export async function GET() {
  const messages = await getMessages();
  return NextResponse.json(messages);
}
