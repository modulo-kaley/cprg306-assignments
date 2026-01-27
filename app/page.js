import Link from "next/link";

export default function Home() {
  return (
  <section className="flex min-h-screen items-center justify-center bg-purple-300 font-sans text-gray-600">
      <h1 className="font-extrabold">Web Development 2 - Assignments</h1>
      <p>
        <Link className="inline-flex shrink-0 rounded-full border border-gray-600" href="/week-2">Week 2 Assignment</Link>
      </p>
    </section>
  );
}
