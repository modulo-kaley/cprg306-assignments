import GroceryItemList from "./GroceryItemList"

export default function Page() {
    return ( 
    <main className="flex min-h-screen flex-col items-center justify-center shrink bg-bg text-text-primary">
        <section>
        <h1 className="text-4xl font-bold">Shopping List</h1>
        <GroceryItemList/>
        </section>
    </main>
    );
}