import StudentInfo from "./StudentInfo";

export default function Page() {
    return ( 
        <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-earth-pearl dark:bg-earth-armadillo">
            <section className="w-full max-w-lg text-center">
                <h1 className="font-serif text-4xl text-earth-soya dark:text-earth-pearl mb-8">
                    Shopping List
                </h1>
                <StudentInfo/>
            </section>
        </main>
    );
}