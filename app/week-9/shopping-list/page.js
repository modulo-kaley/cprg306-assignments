"use client";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import itemsData from "./Item.json";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../components/contexts/AuthContext";

export default function Page() {
    const { user } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
        if (user === null) router.push("/week-9");
    }, [user, router]);
    // Items list — seeded from local JSON, updated when the user adds a new item.
    // TODO: replace with Firestore reads/writes once auth is wired up.
    const [items, setItems] = useState(itemsData);

    // Name of the item the user last clicked, cleaned up for the MealDB API call.
    const [selectedItemName, setSelectedItemName] = useState("");

    // Append a new item to the list. Called by NewItem on form submit.
    const handleAddItem = (newItem) => {
        setItems((prev) => [...prev, newItem]);
    };

    // Strip extra detail from the item name before sending it to the MealDB API:
    // - drop anything after a comma (e.g. "apples, 1 kg" → "apples")
    // - remove emojis (the API doesn't understand them)
    // - trim surrounding whitespace
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