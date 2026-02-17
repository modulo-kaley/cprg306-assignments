// "use client";
// import { useState } from "react";

// export default function NewItem(){
//     const [name, setName] = useState("");
//     const [quantity, setQuantity] = useState(1);
//     const [category, setCategory] = useState("produce");

//     const handleSubmit =(event) => {
//         //prevent reload
//         event.preventDefault();

//         //create item object from state variables
//         const item = {
//             name: name,
//             quantity: quantity,
//             category: category,
//         };

//         //log it and alert the user
//             console.log(item);
//             alert("An item was created with the name:" + name + ", quantity:" + quantity + ", and a category:" + category);

//         //reset 
//         setName("");
//         setQuantity(1);
//         setCategory("produce");
//     };

//     return (
//     <form className="border-blue-300 bg-stone-400 text-black font-semibold "onSubmit={handleSubmit}>
//         <label className="min-w-72 rounded-full border-double text-center">
//             Item Name: 
//             <input className="w-full p-2 rounded-md" 
//                 type="text" 
//                 placeholder="Enter the item name here" 
//                 value={name} onChange={(event) => setName(event.target.value)}
//                 required 
//             />
//         </label>
//         <div className="flex-row">
//             <label className="min-w-72 rounded-full border-double text-center">
//                 Item Quantity:
//                 <input className=""
//                     type="number"
//                     placeholder="Enter the item quantity here"
//                     min="1"
//                     max="99"
//                     /*this should have a min of 1 and a max of 99 -> must be type number for min/max props to work */
//                     value={quantity} onChange={(event) => setQuantity(event.target.value)}
//                 />
//             </label>
//             <label className="min-w-72 rounded-full border-double text-center">
//                 Item Category:
//                 <select placeholder="Category Menu" value={category} onChange={(event) => setCategory(event.target.value)}> 
//                     <option value="produce">Produce</option>
//                     <option value="dairy">Dairy</option>
//                     <option value="bakery">Baker</option>
//                     <option value="meat">Meat</option>
//                     <option value="frozen foods">Frozen Foods</option>
//                     <option value="canned goods">Canned Goods</option>
//                     <option value="dry goods">Dry Goods</option>
//                     <option value="beverages">Beverages</option>
//                     <option value="snacks">Snacks</option>
//                     <option value="household">Household</option>
//                     <option value="other">Other</option>
//                 </select>
//             </label>
//         </div>
//        <button className="min-w-72 rounded-full border-double text-center text-stone-200 border-stone-600 p-4 shadow-cyan-800 bg-blue-300 hover:bg-blue-500" type="submit">+</button>
//     </form>
//     );
// }
