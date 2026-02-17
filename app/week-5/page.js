import NewItem from "./NewItem"

export default function Page(){
    return(
        <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-950 text-white">
            <section className="w-full max-w-lg">
                <h1 className="text-4xl font-bold mb-8 tracking-tight text-center">Add a New Item</h1>
                <NewItem/>
            </section>
        </main>
    );
}