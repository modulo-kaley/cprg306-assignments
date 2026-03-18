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
                    className={`btn-sort ${sortBy === "name" ? "btn-sort-active" : ""}`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className={`btn-sort ${sortBy === "category" ? "btn-sort-active" : ""}`}
                >
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