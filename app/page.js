import Link from "next/link";

export default function Home(){
  const weeks =[
    { label: "Week Two", href: "/week-2" },
    { label: "Week Three", href: "/week-3" },
    { label: "Week Four", href: "/week-4" },
    { label: "Week Five", href: "/week-5"},
    { label: "Week Six", href: "/week-6"},
  ];

  return ( 
    <main className="min-h-screen bg-earth-pearl dark:bg-earth-armadillo px-6 py-16 flex flex-col items-center">
      <div className="text-center mb-12">
        <p className="font-sans text-4xl uppercase tracking-widest text-earth-stonewall dark:text-earth-oyster mb-3">
          CPRG 306
        </p>
        <h1 className="font-serif text-4xl text-earth-soya dark:text-earth-pearl">
          Web Development 2
        </h1>
        <p className="font-sans text-earth-stonewall dark:text-earth-bison mt-2 text-sm">
          Assignments
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        {weeks.map(({ label, href}) => (
          <Link 
            key={href}
            href={href}
            className="
            rounded-lg bg-earth-bison dark:bg-earth-soya
            border border-earth-stonewall/30 dark:border-earth-stonewall/20
            px-6 py-4
            font-sans text-sm font-medium
            text-earth-armadillo dark:text-earth-pearl
            hover:bg-earth-stonewall dark:hover:bg-earth-oyster
            hover:text-earth-pearl dark:hover:text-earth-armadillo
            transition-colors duration-200">
            {label}
          </Link>
        ))}
      </div>
    </main>
  );
}