
/*If you USE it, you IMPORT it.
  If you MAKE it, you EXPORT it. 
*/
export default function GroceryItem({name, quantity, category}){
    return(
      <article className="min-w-72 rounded-full border-double text-center text-stone-200 border-stone-600 p-4 shadow-cyan-800 bg-blue-300">
        <h3 className="text-2xl m-4"> 
            {name}
        </h3>
        <p className="justify-center mb-2">{quantity} {category}</p>
       </article>
    );
}