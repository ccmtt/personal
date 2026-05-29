import Link from "next/link";

export const metadata = {
  title: "Contact - Chen Mingtao",
  description: "Get in touch with Chen Mingtao",
};

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <p className="text-gray-600 mb-8">
          Interested in working together or just want to say hi? Here&apos;s how you
          can reach me.
        </p>
      </section>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Email</h2>
          <p className="text-gray-600">
            The best way to reach me for work inquiries or collaboration.
          </p>
          <a
            href="mailto:chenmingtao@example.com"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            chenmingtao@example.com
          </a>
        </div>

        <div className="p-6 rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">GitHub</h2>
          <p className="text-gray-600">Check out my open source work and projects.</p>
          <a
            href="https://github.com/ccmtt"
            className="text-blue-600 hover:underline mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ccmtt
          </a>
        </div>

        <div className="p-6 rounded-lg border">
          <h2 className="text-lg font-semibold mb-2">Collaboration</h2>
          <p className="text-gray-600">
            Open to discussing freelance projects, consulting, or interesting
            collaborations. Feel free to reach out.
          </p>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Response Time</h2>
        <p className="text-gray-600">
          I typically respond within 1-2 business days. For urgent matters,
          please indicate so in your email subject.
        </p>
      </div>
    </div>
  );
}