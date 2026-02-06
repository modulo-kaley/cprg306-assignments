import ItemList from "./ItemList";

export default function Page() {
    return ( 
    <main className="flex min-h-screen flex-col items-center justify-center shrink bg-green-800 text-stone-200">
        <section>
        <h1 className="text-4xl font-bold">Shopping List</h1>
        <ItemList/>
        </section>
    </main>
    );
}