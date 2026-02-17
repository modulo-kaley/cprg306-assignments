import NewItem from "./NewItem"

export default function Page(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-center shrink bg-green-800 text-stone-200">
            <section>
                <h1 className="text-4xl font-bold">Add a New Item!</h1>
                <NewItem/>
            </section>
        </main>
    );
}