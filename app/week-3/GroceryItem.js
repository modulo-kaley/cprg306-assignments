
/*If you USE it, you IMPORT it.
  If you MAKE it, you EXPORT it. 
*/
export default function Item({name, quantity, category}){
    return(
      <article className="inline-flex justify-items-normal shrink-14 rounded-full border text-stone-200 border-gray-600">
        <h3> 
            {name}
        </h3>
        <p>{quantity} {category}</p>
       </article>
    );
}