import Link from "next/link";
import { notFound } from "next/navigation";

const writingData: Record<
  string,
  {
    title: string;
    date: string;
    content: string;
  }
> = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js",
    date: "2026-05-20",
    content: `Next.js is a React framework that enables server-side rendering and static site generation.

## Getting Started

To create a new Next.js project:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## App Router

Next.js 13+ introduced the App Router, which uses a file-system based routing approach.

## Key Concepts

- **Server Components**: Components that render on the server by default
- **Client Components**: Use the 'use client' directive for interactivity
- **Layouts**: Share UI across pages
- **Server Actions**: Handle form submissions and data mutations`,
  },
  "typescript-best-practices": {
    title: "TypeScript Best Practices",
    date: "2026-05-15",
    content: `TypeScript adds static type checking to JavaScript, helping catch errors early.

## Key Tips

1. **Enable strict mode** in tsconfig.json
2. **Use explicit types** for function parameters and return values
3. **Prefer interfaces** over type aliases for object shapes
4. **Use union types** for values that can be one of several types
5. **Avoid any** - use unknown when type is truly unknown

## Example

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Resources

- TypeScript Documentation
- React TypeScript Cheatsheet`,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(writingData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const writing = writingData[slug];
  if (!writing) return { title: "Writing Not Found" };
  return {
    title: `${writing.title} - Chen Mingtao`,
    description: writing.title,
  };
}

export default async function WritingDetail({ params }: PageProps) {
  const { slug } = await params;
  const writing = writingData[slug];

  if (!writing) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <Link
        href="/writing"
        className="text-sm text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Writing
      </Link>

      <article>
        <h1 className="text-3xl font-bold mb-2">{writing.title}</h1>
        <time className="text-sm text-gray-500">{writing.date}</time>

        <div className="mt-8 prose prose-gray">
          {writing.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-gray-700 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}