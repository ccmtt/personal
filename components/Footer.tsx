import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t p-6 text-center text-sm text-gray-600">
      <p>
        Built by Chen Mingtao. View source on{" "}
        <Link
          href="https://github.com/ccmtt/personal"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </p>
    </footer>
  );
}