export default function Item({ name, quantity, category, emoji }) {
  return (
    <li className="card flex flex-col gap-1">
      <h3 className="font-serif text-lg text-text-primary">
        {emoji && <span className="mr-1">{emoji}</span>}{name}
      </h3>
      <p className="font-sans text-sm text-text-muted">{quantity} · {category}</p>
    </li>
  );
}