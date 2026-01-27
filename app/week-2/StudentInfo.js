import Link from "next/link";

export default function StudentInfo() {
    return (
        <section>
            <h2 className="font-extrabold">Kaley Wood</h2>
            <p>
                <Link className="font-medium" href="https://github.com/modulo-kaley/cprg306-assignments">Click to Enter my Repository</Link>
            </p>
        </section> 
    );
}