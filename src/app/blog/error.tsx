"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <h1 className="block text-2xl font-bold text-white sm:text-4xl">
      Oops!!! {error.message}
    </h1>
  );
}
