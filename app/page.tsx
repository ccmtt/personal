import Link from "next/link";

const recentWritings = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2026-05-20",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    date: "2026-05-15",
  },
];

const projects = [
  {
    slug: "personal-site",
    title: "Personal Website",
    description: "This site itself - built with Next.js and Tailwind CSS",
  },
];

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <section className="py-16">
        <h1 className="text-4xl font-bold tracking-tight">Chen Mingtao</h1>
        <p className="mt-4 text-xl text-gray-600">
          Software Developer. Building things with code.
        </p>
        <p className="mt-2 text-gray-500">
          Currently focused on full-stack development and system design.
        </p>
      </section>

      <section className="py-8 border-t">
        <h2 className="text-lg font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block p-4 rounded-lg border hover:border-blue-500 transition-colors"
            >
              <h3 className="font-medium">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{project.description}</p>
            </Link>
          ))}
        </div>
        <Link
          href="/projects"
          className="inline-block mt-4 text-sm text-blue-600 hover:underline"
        >
          View all projects →
        </Link>
      </section>

      <section className="py-8 border-t">
        <h2 className="text-lg font-semibold mb-4">Recent Writing</h2>
        <div className="space-y-3">
          {recentWritings.map((writing) => (
            <Link
              key={writing.slug}
              href={`/writing/${writing.slug}`}
              className="block text-sm hover:text-blue-600"
            >
              <span className="text-gray-500">{writing.date}</span>
              <span className="mx-2">·</span>
              <span>{writing.title}</span>
            </Link>
          ))}
        </div>
        <Link
          href="/writing"
          className="inline-block mt-4 text-sm text-blue-600 hover:underline"
        >
          View all writing →
        </Link>
      </section>

      <section className="py-8 border-t">
        <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-4">
          Interested in working together or just want to say hi?
        </p>
        <Link
          href="/contact"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
}