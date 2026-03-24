import Link from "next/link";

const weeks = [
  { label: "Week Two",   href: "/week-2" },
  { label: "Week Three", href: "/week-3" },
  { label: "Week Four",  href: "/week-4" },
  { label: "Week Five",  href: "/week-5" },
  { label: "Week Six",   href: "/week-6" },
  { label: "Week Seven", href: "/week-7" },
  { label: "Week Eight", href: "/week-8" },
  { label: "Week Nine", href: "/week-9" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bg px-6 py-16 flex flex-col items-center">

      <div className="text-center mb-12">
        <p className="font-sans text-xs uppercase tracking-widest text-text-muted mb-3">
          CPRG 306
        </p>
        <h1 className="font-serif text-4xl text-text-primary">
          Web Development 2
        </h1>
        <p className="font-sans text-sm text-text-muted mt-2">
          Assignments
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        {weeks.map(({ label, href }, index) => (
          <Link
            key={href}
            href={href}
            className={`home-link ${index === weeks.length - 1 && weeks.length % 2 !== 0 ? "sm:col-span-2" : ""}`}
          >
            {label}
          </Link>
        ))}
      </div>

    </main>
  );
}