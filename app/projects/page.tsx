import { getAllProjects } from "@/lib/markdown";
import ProjectsClient from "./ProjectsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Chen Mingtao",
  description: "A collection of my work and side projects in web development, tools, and experiments.",
};

export default function Projects() {
  const projects = getAllProjects();

  return <ProjectsClient projects={projects} />;
}