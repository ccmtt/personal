import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Chen Mingtao",
  description: "About Chen Mingtao - Software Developer",
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-6">About</h1>
        <div className="prose prose-gray">
          <p className="text-lg text-gray-700 leading-relaxed">
            Software developer with experience in building web applications and
            distributed systems. I enjoy solving complex problems and writing
            clean, maintainable code.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <h2 className="text-xl font-semibold mb-4">Technical Focus</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Full-stack web development</li>
          <li>System design and architecture</li>
          <li>TypeScript / JavaScript</li>
          <li>React and Next.js</li>
          <li>Node.js and backend services</li>
        </ul>
      </section>

      <section className="py-8 border-t">
        <h2 className="text-xl font-semibold mb-4">What I Do</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            I build web applications, APIs, and developer tools. My focus is on
            creating reliable and efficient software solutions.
          </p>
          <p>
            When working on projects, I prioritize code quality, performance, and
            user experience.
          </p>
        </div>
      </section>

      <section className="py-8 border-t">
        <h2 className="text-xl font-semibold mb-4">What I&apos;m Not</h2>
        <ul className="space-y-2 text-gray-600">
          <li>Not a UI/UX designer</li>
          <li>Not focused on mobile apps</li>
          <li>Not a DevOps specialist</li>
        </ul>
      </section>

      <section className="py-8 border-t">
        <h2 className="text-xl font-semibold mb-4">Currently Learning</h2>
        <p className="text-gray-700">
          System design patterns, performance optimization, and exploring new
          web technologies.
        </p>
      </section>
    </div>
  );
}