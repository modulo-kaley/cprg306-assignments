import Item from "./Item";
import { useState } from "react";

export default function ItemList({ items }) {
    // --- Logic Zone --- 
    const [sortBy, setSortBy] = useState("name");
    const sortedItems = [...items].sort((a, b) =>
        // Read either a/b.name or a/b.category 
    a[sortBy].localeCompare(b[sortBy])
    );

    return (
        // --- Display Zone --- 
        // * React Fragment *
        <>
            <div className="flex gap-2 p-4">
                <button 
                    onClick={() => setSortBy("name")}
                    className={`px-4 py-2 rounded-lg font-semibold ${sortBy === "name" ? "bg-gray-600" : "bg-gray-800"}`}>
                    Sort by Name 
                </button>
                <button 
                    onClick={() => setSortBy("category")}
                    className={`px-4 py-2 rounded-lg font-semibold ${sortBy === "category" ? "bg-gray-600" : "bg-gray-800"}`}>
                    Sort by Category
                </button>
            </div>
            <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
                {sortedItems.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </ul>
        </>
    ); 
}