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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-earth-bison dark:bg-earth-soya rounded-xl p-6">
            <label 
                htmlFor="name"
                className="flex flex-col gap-1 font-sans text-sm font-medium text-earth-armadillo dark:text-earth-pearl">
                Item Name
                <input 
                    id="name" 
                    className="w-full p-2 rounded-lg bg-earth-pearl dark:bg-earth-armadillo text-earth-soya dark:text-earth-pearl placeholder-earth-stonewall focus:outline-none focus:ring-2 focus:ring-earth-copper"
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
                    className="flex flex-col gap-1 font-sans text-sm font-medium text-earth-armadillo dark:text-earth-pearl w-1/2">
                    Quantity
                    <input 
                        id="quantity" 
                        className="w-full p-2 rounded-lg bg-earth-pearl dark:bg-earth-armadillo text-earth-soya dark:text-earth-pearl focus:outline-none focus:ring-2 focus:ring-earth-copper"
                        type="number"
                        min="1"
                        max="99"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                </label>

                <label 
                    htmlFor="category" 
                    className="flex flex-col gap-1 font-sans text-sm font-medium text-earth-armadillo dark:text-earth-pearl w-1/2">
                    Category
                    <select
                        id="category"
                        className="w-full p-2 rounded-lg bg-earth-pearl dark:bg-earth-armadillo text-earth-soya dark:text-earth-pearl focus:outline-none focus:ring-2 focus:ring-earth-copper"
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
                className="w-full mt-2 p-3 rounded-xl bg-earth-copper hover:bg-earth-brown dark:hover:bg-earth-brown transition-colors duration-200 font-sans font-bold text-lg text-earth-pearl">
                +
            </button>
        </form>
    );
}