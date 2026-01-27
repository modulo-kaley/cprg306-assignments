import Link from "next/link";

export default function Home() {
  return (
  <section className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="">Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Week 2 Assignment</Link>
      </p>
    </section>
  );
}
