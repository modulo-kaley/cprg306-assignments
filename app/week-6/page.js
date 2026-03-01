"use client";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import itemsData from "./Item.json";
import { useState } from "react"; 

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };
return(
    <main className="min-h-screen flex flex-col items-center p-8 pr-16 bg-earth-pearl dark:bg-earth-armadillo">
        <section className="w-full max-w-lg">
            <h1 className="font-serif text-4xl text-earth-soya dark:text-earth-pearl mb-2 text-center">
                Shopping List
            </h1>
            <p className="font-sans text-xs uppercase tracking-widest text-earth-stonewall dark:text-earth-oyster text-center mb-8">
                Your items
            </p>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </section>
    </main>
);
}