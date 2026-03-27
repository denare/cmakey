import { NextResponse } from "next/server";
import { readDB, writeDB } from "@/lib/db";

export async function GET() {
  const data = await readDB();
  return NextResponse.json(data.services);
}

export async function POST(request: Request) {
  try {
    const service = await request.json();
    const data = await readDB();
    
    const index = data.services.findIndex((s) => s.slug === service.slug);
    if (index !== -1) {
      data.services[index] = service;
    } else {
      data.services.push(service);
    }
    
    await writeDB(data);
    return NextResponse.json({ success: true, service });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to save service" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  
  if (!slug) return NextResponse.json({ success: false, error: "Slug is required" }, { status: 400 });

  const data = await readDB();
  data.services = data.services.filter((s) => s.slug !== slug);
  await writeDB(data);
  
  return NextResponse.json({ success: true });
}
