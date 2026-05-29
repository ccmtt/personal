import { getAboutContent } from "@/lib/markdown";
import AboutClient from "./AboutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Chen Mingtao",
  description: "Learn more about Chen Mingtao, a full-stack developer focused on modern web technologies.",
};

export default function About() {
  const { data, content } = getAboutContent();

  return <AboutClient aboutData={data} markdownContent={content} />;
}