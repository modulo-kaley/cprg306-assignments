import Link from "next/link";

// Goal: play with dark and light mode

export default function Home() {
  return (
  <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8">
      <h1 className="font-bold text-4xl mb-2 tracking-tight">Web Development 2</h1>
      <p className="text-gray-400 mb-12 text-lg">Assignments</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
        <Link className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl p-6 text-center font-semibold text-lg" href="/week-2">
          Week Two
        </Link>
        <Link className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl p-6 text-center font-semibold text-lg" href="/week-3">
          Week Three
        </Link>
        <Link className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl p-6 text-center font-semibold text-lg" href="/week-4">
          Week Four
        </Link>
        <Link className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl p-6 text-center font-semibold text-lg" href="/week-5">
          Week Five
        </Link>

      </div>
    </main>
  );
}
