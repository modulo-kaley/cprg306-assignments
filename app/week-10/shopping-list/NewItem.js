"use client";
import { useState } from "react";
import EmojiPicker from "../../components/EmojiPicker";

// Default form values — used on mount and after a successful submit.
const initialState = { name: "", quantity: 1, category: "produce" };

const categories = ["produce", "dairy", "bakery", "meat", "frozen foods",
    "canned goods", "dry goods", "beverages", "snacks", "household", "other"];

// Form that lets the user add a new item to the shopping list.
// Calls onAddItem with the new item object, then resets to initialState.
export default function NewItem({ onAddItem }) {
    const [item, setItem] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Attach a unique id so React (and future Firestore writes) can key on it.
        const newItem = { ...item, id: crypto.randomUUID() };
        onAddItem(newItem);
        setItem(initialState);
    };

    // Single handler for all inputs — uses the input's name attribute to know
    // which field of the item object to update.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="card flex flex-col gap-4">

            <label htmlFor="name" className="label">
                Item Name
                <div className="flex gap-2 items-center">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter the item name here"
                        value={item.name}
                        onChange={handleChange}
                        className="input flex-1"
                    />
                    <EmojiPicker
                        selectedEmoji={item.emoji}
                        onEmojiSelect={(emoji) => setItem({ ...item, emoji })}
                    />
                </div>
            </label>

            <div className="flex gap-4">
                <label htmlFor="quantity" className="label w-1/2">
                    Quantity
                    <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        min="1"
                        max="99"
                        value={item.quantity}
                        onChange={handleChange}
                        className="input"
                    />
                </label>

                <label htmlFor="category" className="label w-1/2">
                    Category
                    <select
                        id="category"
                        name="category"
                        value={item.category}
                        onChange={handleChange}
                        className="input"
                    >
                        {categories.map((c) => (
                            <option key={c} value={c}>
                                {c.charAt(0).toUpperCase() + c.slice(1)}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <button type="submit" className="btn-primary">+</button>

        </form>
    );
}