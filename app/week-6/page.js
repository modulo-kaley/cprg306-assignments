import NewItem from "./NewItem";
import ItemList from "./ItemList";
import itemsData from "./Items.json";
import { useState } from "react"; 

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };
return(
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-950 text-white">
        <section className="w-full max-w-lg">
            <h1 className="text-4xl font-bold mb-8 tracking-tight text-center">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </section>
    </main>
);
}