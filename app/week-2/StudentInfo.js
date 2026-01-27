import Link from "next/link";

export default function StudentInfo() {
    return (
        <section className="flex min-h-screen items-center justify-center bg-green-800 text-stone-200">
            <h2 className="font-extrabold text-blue-50">Kaley Wood</h2>
            <p>
                <Link className="font-medium" href="https://cprg306-assignments-olive-beta.vercel.app/">Click to Enter my Repository</Link>
            </p>
        </section> 
    );
}