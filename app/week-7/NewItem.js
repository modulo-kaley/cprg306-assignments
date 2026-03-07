"use client";
import { useState } from "react";
import EmojiPicker from "../components/EmojiPicker";
const initialState = { name: "", quantity: 1, category: "produce" };

export default function NewItem({ onAddItem }){
    const [item, setItem] = useState(initialState);

    const categories = ["produce", "dairy", "bakery", "meat", "frozen foods",
        "canned goods", "dry goods", "beverages", "snacks", "household", "other"];

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = { ...item, id: crypto.randomUUID()}
        onAddItem(newItem);
        setItem(initialState);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-earth-bison dark:bg-earth-soya rounded-xl p-6">
            <label 
            htmlFor="name"
            className="flex flex-col gap-1 font-sans text-sm font-medium text-earth-armadillo dark:text-earth-pearl">
                Item Name
                <div className="flex gap-2 items-center">
                    <input 
                        id="name" 
                        name="name"
                        className="flex-1 p-2 rounded-lg bg-earth-pearl dark:bg-earth-armadillo text-earth-soya dark:text-earth-pearl placeholder-earth-stonewall focus:outline-none focus:ring-2 focus:ring-earth-copper"
                        type="text"
                        placeholder="Enter the item name here"
                        value={item.name}
                        onChange={handleChange}
                    />
                    <EmojiPicker
                        selectedEmoji={item.emoji}
                        onEmojiSelect={(emoji) => setItem({ ...item, emoji })}
                    />
                </div>
            </label>

            <div className="flex gap-4">
                <label 
                    htmlFor="quantity"
                    className="flex flex-col gap-1 font-sans text-sm font-medium text-earth-armadillo dark:text-earth-pearl w-1/2">
                    Quantity
                    <input 
                        id="quantity" 
                        name="quantity"
                        className="w-full p-2 rounded-lg bg-earth-pearl dark:bg-earth-armadillo text-earth-soya dark:text-earth-pearl focus:outline-none focus:ring-2 focus:ring-earth-copper"
                        type="number"
                        min="1"
                        max="99"
                        value={item.quantity}
                        onChange={handleChange}
                    />
                </label>

                <label 
                    htmlFor="category" 
                    className="flex flex-col gap-1 font-sans text-sm font-medium text-earth-armadillo dark:text-earth-pearl w-1/2">
                    Category
                    <select
                        id="category"
                        name="category"
                        className="w-full p-2 rounded-lg bg-earth-pearl dark:bg-earth-armadillo text-earth-soya dark:text-earth-pearl focus:outline-none focus:ring-2 focus:ring-earth-copper"
                        value={item.category}
                        onChange={handleChange}
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