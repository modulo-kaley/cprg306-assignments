"use client";
import { useState } from "react";

export default function NewItem(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert("An item was created with the name:" + name + ", quantity:" + quantity + ", and a category:" + category);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-800 rounded-xl p-6">
            <label className="flex flex-col gap-1 text-sm font-semibold text-gray-300">
                Item Name
                <input
                    className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    type="text"
                    placeholder="Enter the item name here"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </label>

            <div className="flex gap-4">
                <label className="flex flex-col gap-1 text-sm font-semibold text-gray-300 w-1/2">
                    Quantity
                    <input
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                        type="number"
                        min="1"
                        max="99"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                </label>

                <label className="flex flex-col gap-1 text-sm font-semibold text-gray-300 w-1/2">
                    Category
                    <select
                        className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
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