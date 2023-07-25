import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the company",
  description: "Description about the company",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="block text-2xl font-bold text-white sm:text-4xl">
        About us
      </h1>
      <ul>
        <li>
          <Link
            href="/about/contacts"
            className="font-medium text-gray-400 hover:text-gray-500"
          >
            Contacts
          </Link>
        </li>
        <li>
          <Link
            href="/about/team"
            className="font-medium text-gray-400 hover:text-gray-500"
          >
            Team
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
