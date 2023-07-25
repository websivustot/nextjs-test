import { Metadata } from "next";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  return { title: post.title };
}
export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return (
    <>
      <h1 className="block text-2xl font-bold text-white sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-lg text-gray-300">{post.body}</p>
    </>
  );
}
