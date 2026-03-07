export default function Item({ name, quantity, category }) {
    return (
        <li className="card">
            <h3 className="font-serif text-lg text-text-primary">{name}</h3>
            <p className="font-sans text-sm text-text-muted">{quantity} · {category}</p>
        </li>
    );
}