import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface ProjectMeta {
  title: string;
  slug: string;
  description: string;
  category: string;
  year: string;
  status: string;
  tags: string[];
  gradient: string;
  link: string;
  order: number;
}

export interface AboutData {
  title: string;
  subtitle: string;
  avatar: string;
  status: string;
  bio: string;
  bio2: string;
  location: string;
  education: string;
  currentlyLearning: string;
  currentlyLearningText: string;
  whatIDo: string;
  whatIDoItem1: string;
  whatIDoItem2: string;
  whatIDoItem3: string;
  whatImNot: string;
  notDesigner: string;
  notMobile: string;
  notDevops: string;
  technicalFocus: string;
  skills: string[];
  social: {
    github: string;
    twitter: string;
    email: string;
  };
}

export function getAboutContent(): { data: AboutData; content: string } {
  const filePath = path.join(contentDirectory, "about", "about.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { data: data as AboutData, content };
}

export function getAllProjects(): ProjectMeta[] {
  const projectsDirectory = path.join(contentDirectory, "projects");
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const filePath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return data as ProjectMeta;
    })
    .sort((a, b) => a.order - b.order);

  return projects;
}

export function getProjectBySlug(slug: string): { data: ProjectMeta; content: string } | null {
  const filePath = path.join(contentDirectory, "projects", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { data: data as ProjectMeta, content };
}

export function getProjectSlugs(): string[] {
  const projectsDirectory = path.join(contentDirectory, "projects");
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}