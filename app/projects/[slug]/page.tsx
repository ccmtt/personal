import { getProjectBySlug, getProjectSlugs } from "@/lib/markdown";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.data.title} - Chen Mingtao`,
    description: project.data.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { data, content } = project;

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16 relative z-10">
        {/* Back button */}
        <a
          href="/projects"
          className="inline-flex items-center text-sm text-gray-500 dark:text-white/50 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </a>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs px-3 py-1 rounded-full bg-green-100 dark:bg-cyan-500/20 text-green-700 dark:text-cyan-300 border border-green-200 dark:border-cyan-500/30 font-medium">
              {data.status}
            </span>
            <span className="text-xs text-gray-400 dark:text-white/40">{data.year}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            {data.title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-white/60">
            {data.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 border border-gray-200 dark:border-white/10 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Content - rendered as simple text for now */}
        <div className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:text-gray-900 dark:prose-headings:text-white
          prose-p:text-gray-600 dark:prose-p:text-gray-300
          prose-a:text-blue-600 dark:prose-a:text-cyan-400
          prose-strong:text-gray-800 dark:prose-strong:text-white
          prose-code:text-purple-600 dark:prose-code:text-purple-400
          prose-code:bg-gray-100 dark:prose-code:bg-white/10
          prose-code:px-2 prose-code:py-1 prose-code:rounded
          prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800
          prose-pre:text-gray-100
        ">
          {content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}