import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://chenmingtao.com";
  const siteName = "Chen Mingtao";
  const description = "Software Developer - Technical notes and projects";

  const writings = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next.js",
      date: "2026-05-20",
      excerpt: "A quick overview of Next.js App Router and how to build your first page.",
    },
    {
      slug: "typescript-best-practices",
      title: "TypeScript Best Practices",
      date: "2026-05-15",
      excerpt: "Key patterns and tips for writing type-safe TypeScript code.",
    },
  ];

  const rssItems = writings
    .map(
      (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${baseUrl}/writing/${item.slug}</link>
      <guid>${baseUrl}/writing/${item.slug}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <description><![CDATA[${item.excerpt}]]></description>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteName}</title>
    <link>${baseUrl}</link>
    <description>${description}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}