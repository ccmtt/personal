import { getAboutContent } from "@/lib/markdown";
import AboutClient from "./AboutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Chen Mingtao, an SRE engineer focused on automation, monitoring, and AI applications.",
  openGraph: {
    title: "About Me - Chen Mingtao",
    description: "Learn more about Chen Mingtao, an SRE engineer focused on automation, monitoring, and AI applications.",
    url: "https://chenmingtao.com/about",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About Me - Chen Mingtao",
    description: "Learn more about Chen Mingtao, an SRE engineer focused on automation, monitoring, and AI applications.",
  },
};

export default function About() {
  const { data, content } = getAboutContent();

  return <AboutClient aboutData={data} markdownContent={content} />;
}