import Link from "next/link";

const projects = [
  {
    slug: "personal-site",
    title: "Personal Website",
    description: "This site itself - built with Next.js and Tailwind CSS",
    status: "In Progress",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const metadata = {
  title: "Projects - Chen Mingtao",
  description: "Projects by Chen Mingtao",
};

export default function Projects() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <p className="text-gray-600 mb-8">
          A collection of projects I&apos;ve worked on. The personal site itself is
          the first entry.
        </p>
      </section>

      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="p-6 rounded-lg border hover:border-blue-500 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <Link href={`/projects/${project.slug}`}>
                  <h2 className="text-xl font-semibold hover:text-blue-600">
                    {project.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                {project.status}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}