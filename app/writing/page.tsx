import Link from "next/link";

const writings = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2026-05-20",
    excerpt:
      "A quick overview of Next.js App Router and how to build your first page.",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    date: "2026-05-15",
    excerpt:
      "Key patterns and tips for writing type-safe TypeScript code.",
  },
];

export const metadata = {
  title: "Writing - Chen Mingtao",
  description: "Technical notes, learning logs, and debug notes by Chen Mingtao",
};

export default function Writing() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-6">Writing</h1>
        <p className="text-gray-600 mb-8">
          Technical notes, learning logs, and debug notes.
        </p>
      </section>

      <div className="space-y-8">
        {writings.map((writing) => (
          <article key={writing.slug} className="border-b pb-8 last:border-b-0">
            <Link href={`/writing/${writing.slug}`}>
              <h2 className="text-xl font-semibold hover:text-blue-600">
                {writing.title}
              </h2>
            </Link>
            <p className="text-gray-600 mt-2">{writing.excerpt}</p>
            <time className="text-sm text-gray-500 mt-2 block">{writing.date}</time>
          </article>
        ))}
      </div>
    </div>
  );
}