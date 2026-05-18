import type { Metadata } from "next";
import { getServices } from "@/lib/services";
import { getFeaturedProjects } from "@/lib/projects";
import HomeClientPage from "@/components/HomeClientPage";

export const metadata: Metadata = {
  title: "Cmakey Company Limited – Unlock The World",
  description:
    "Cmakey Company Limited is a multi-sector company based in Dar es Salaam, Tanzania, offering construction, logistics, hospitality, entertainment, clearing & forwarding, and general material supply services.",
};

export default async function HomePage() {
  const services = await getServices();
  const projects = await getFeaturedProjects();

  return (
    <HomeClientPage 
      initialServices={services} 
      initialProjects={projects} 
    />
  );
}
