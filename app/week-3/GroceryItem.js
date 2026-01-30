
/*If you USE it, you IMPORT it.
  If you MAKE it, you EXPORT it. 
*/
export default function GroceryItem({name, quantity, category}){
    return(
      <article className="inline-flex justify-items-normal shrink-14 rounded-full border text-stone-200 border-gray-600 p-4 rounded-lg mx-8 max-w-fit">
        <h3 className="m-4"> 
            {name}
        </h3>
        <p className="text-2xl mb-2">{quantity} {category}</p>
       </article>
    );
}