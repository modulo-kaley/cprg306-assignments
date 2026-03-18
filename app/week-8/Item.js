export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="card flex flex-col gap-1 cursor-pointer"
      onClick={onSelect}
    >
      <h3 className="font-serif text-lg text-text-primary">{name}</h3>
      <p className="font-sans text-sm text-text-muted">{quantity} · {category}</p>
    </li>
  );
}