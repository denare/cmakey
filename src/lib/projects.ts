import { readDB } from "./db";
import { Project } from "@/types";

export async function getProjects(): Promise<Project[]> {
  const data = await readDB();
  return data.projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const data = await readDB();
  return data.projects.filter(p => p.featured);
}


export type { Project };
