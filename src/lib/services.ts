import { readDB } from "./db";
import { Service } from "@/types";

export async function getServices(): Promise<Service[]> {
  const data = await readDB();
  return data.services;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const data = await readDB();
  return data.services.find((s) => s.slug === slug);
}

export type { Service };
