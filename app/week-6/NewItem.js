"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const categories = ["produce", "dairy", "bakery", "meat", "frozen foods",
        "canned goods", "dry goods", "beverages", "snacks", "household", "other"];

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = crypto.randomUUID(); 
        const item = { id, name, quantity, category };
        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-800 rounded-xl p-6">
            <label 
                htmlFor="name"
                className="flex flex-col gap-1 text-sm font-semibold text-gray-300">
                Item Name
                <input 
                    id="name" 
                    className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    type="text"
                    placeholder="Enter the item name here"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </label>

            <div className="flex gap-4">
                <label 
                    htmlFor="quantity"
                    className="flex flex-col gap-1 text-sm font-semibold text-gray-300 w-1/2">
                    Quantity
                    <input 
                        id="quantity" 
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                        type="number"
                        min="1"
                        max="99"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                </label>

                <label 
                    htmlFor="category" 
                    className="flex flex-col gap-1 text-sm font-semibold text-gray-300 w-1/2">
                    Category
                    <select
                        id="category"
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        {categories.map((c) => (
                            <option key={c} value={c}>
                                {c.charAt(0).toUpperCase() + c.slice(1)}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <button
                type="submit"
                className="w-full mt-2 p-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition-colors font-bold text-lg text-white">
                +
            </button>
        </form>
    );
}