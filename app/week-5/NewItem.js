"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert("An item was created with the name: " + name + ", quantity: " + quantity + ", and a category: " + category);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form onSubmit={handleSubmit} className="card flex flex-col gap-4">
            <label htmlFor="name" className="label">
                Item Name
                <input
                    id="name"
                    className="input"
                    type="text"
                    placeholder="Enter the item name here"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </label>

            <div className="flex gap-4">
                <label htmlFor="quantity" className="label w-1/2">
                    Quantity
                    <input
                        id="quantity"
                        className="input"
                        type="number"
                        min="1"
                        max="99"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                </label>

                <label htmlFor="category" className="label w-1/2">
                    Category
                    <select
                        id="category"
                        className="input"
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

            <button type="submit" className="btn-primary">+</button>
        </form>
    );
}