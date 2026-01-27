import StudentInfo from "./StudentInfo";

export default function Page() {
    return ( 
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-800 text-stone-200">
        <section>
        <h1>Viewing List</h1>
        <StudentInfo/>
        </section>
    </main>
    );
}