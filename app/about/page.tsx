import { getAboutContent } from "@/lib/markdown";
import AboutClient from "./AboutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Chen Mingtao, a full-stack developer focused on modern web technologies.",
  openGraph: {
    title: "About Me - Chen Mingtao",
    description: "Learn more about Chen Mingtao, a full-stack developer focused on modern web technologies.",
    url: "https://chenmingtao.com/about",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About Me - Chen Mingtao",
    description: "Learn more about Chen Mingtao, a full-stack developer focused on modern web technologies.",
  },
};

export default function About() {
  const { data, content } = getAboutContent();

  return <AboutClient aboutData={data} markdownContent={content} />;
}