import StudentInfo from "./StudentInfo";

export default function Page() {
    return ( 
    <main>
        <section className="flex min-h-screen items-center justify-center bg-green-800 text-stone-200">
        <h1 className="font-extrabold text-blue-50">Viewing List</h1>
        <StudentInfo/>
        </section>
    </main>
    );
}