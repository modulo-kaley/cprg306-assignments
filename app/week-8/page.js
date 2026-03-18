"use client";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import itemsData from "./Item.json";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((prev) => [...prev, newItem]);
    };

    // cleans up the item name before passing it to the API
    // removes anything after a comma (e.g. "1 kg"), trims whitespace, strips emojis
    const handleItemSelect = (item) => {
        const cleanedName = item.name
            .split(",")[0]
            .trim()
            .replace(/\p{Emoji}/gu, "")
            .trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="min-h-screen flex flex-col items-center p-8 bg-bg">
            <section className="w-full max-w-4xl">
                <h1 className="font-serif text-4xl text-text-primary mb-2 text-center">
                    Shopping List
                </h1>
                <p className="font-sans text-xs uppercase tracking-widest text-text-muted text-center mb-8">
                    Your items
                </p>

                <div className="flex gap-8">
                    {/* left side — add items + list */}
                    <div className="flex-1">
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>

                    {/* right side — meal ideas based on clicked item */}
                    <div className="flex-1">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            </section>
        </main>
    );
}