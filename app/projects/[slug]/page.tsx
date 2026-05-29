import Link from "next/link";
import { notFound } from "next/navigation";

const projectData: Record<
  string,
  {
    title: string;
    description: string;
    content: string;
    tech: string[];
    status: string;
  }
> = {
  "personal-site": {
    title: "Personal Website",
    description: "This site itself - built with Next.js and Tailwind CSS",
    content: `This is my personal website built with Next.js 16, React 19, and Tailwind CSS.

## Goals

- Serve as a developer-focused personal site
- Showcase my projects and writing
- Provide a way to get in touch

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (planned)`,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projectData[slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} - Chen Mingtao`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = projectData[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <Link
        href="/projects"
        className="text-sm text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Projects
      </Link>

      <article>
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
            {project.status}
          </span>
        </div>

        <p className="text-gray-600 mb-6">{project.description}</p>

        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">
            Technologies
          </h2>
          <div className="flex gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-gray">
          {project.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-gray-700 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}