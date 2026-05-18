import type { Metadata } from "next";
import { getProjects } from "@/lib/projects";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore the diverse portfolio of Cmakey Company Limited — showcasing our excellence in construction, logistics, and multi-sector services across Tanzania.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectGrid projects={projects} />;
}
