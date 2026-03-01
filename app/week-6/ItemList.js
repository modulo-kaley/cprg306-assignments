"use client";
import Item from "./Item";
import { useState } from "react";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");
    const sortedItems = [...items].sort((a, b) =>
        a[sortBy].localeCompare(b[sortBy])
    );

    return (
        <>
            <div className="flex gap-2 p-4">
                <button 
                    onClick={() => setSortBy("name")}
                    className={`px-4 py-2 rounded-md font-sans font-medium text-sm transition-colors duration-200 ${
                        sortBy === "name" 
                        ? "bg-earth-copper text-earth-pearl" 
                        : "bg-earth-bison dark:bg-earth-soya text-earth-armadillo dark:text-earth-pearl hover:bg-earth-stonewall hover:text-earth-pearl"
                    }`}>
                    Sort by Name 
                </button>
                <button 
                    onClick={() => setSortBy("category")}
                    className={`px-4 py-2 rounded-md font-sans font-medium text-sm transition-colors duration-200 ${
                        sortBy === "category" 
                        ? "bg-earth-copper text-earth-pearl" 
                        : "bg-earth-bison dark:bg-earth-soya text-earth-armadillo dark:text-earth-pearl hover:bg-earth-stonewall hover:text-earth-pearl"
                    }`}>
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