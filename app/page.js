import Link from "next/link";

export default function Home() {
  return (
  <section className="flex min-h-screen flex-col items-center justify-center bg-purple-300 font-sans text-gray-600">
      <h1 className="font-extrabold justify-items-normal">Web Development 2 - Assignments</h1>
      <p>
        <Link className="inline-flex justify-items-normal shrink-14 rounded-full border border-gray-600" href="/week-2">Week 2 Assignment</Link>
        <Link className="inline-flex justify-items-normal shrink-14 rounded-full border border-gray-600" href="/week-3">Week 3 Assignment</Link>
        <Link className="inline-flex justify-items-normal shrink-14 rounded-full border border-gray-600" href="/week-4">Week 4 Assignment</Link>
        <Link className="inline-flex justify-items-normal shrink-14 rounded-full border border-gray-600" href="/week-5">Week 5 Assignment</Link>

      </p>
    </section>
  );
}
