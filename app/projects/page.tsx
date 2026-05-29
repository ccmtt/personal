import { getAllProjects } from "@/lib/markdown";
import ProjectsClient from "./ProjectsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my work and side projects in web development, tools, and experiments.",
  openGraph: {
    title: "Projects - Chen Mingtao",
    description: "A collection of my work and side projects in web development, tools, and experiments.",
    url: "https://chenmingtao.com/projects",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Projects - Chen Mingtao",
    description: "A collection of my work and side projects in web development, tools, and experiments.",
  },
};

export default function Projects() {
  const projects = getAllProjects();

  return <ProjectsClient projects={projects} />;
}