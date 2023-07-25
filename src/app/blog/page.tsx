import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch data");
  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1 className="block text-2xl font-bold text-white sm:text-4xl">
        Blog page
      </h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="mt-3 text-lg text-gray-300"
            >
              {post.title}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
