/*If you USE it, you IMPORT it.
  If you MAKE it, you EXPORT it. 
*/
export default function GroceryItem({ name, quantity, category }) {
    return (
        <li className="card">
            <h3 className="font-serif text-lg text-text-primary">{name}</h3>
            <p className="font-sans text-sm text-text-muted">{quantity} · {category}</p>
        </li>
    );
}