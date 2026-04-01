export default function Item({ name, quantity, category, emoji, onSelect }) {
  return (
    <li className="item-card cursor-pointer" onClick={onSelect}>
      {emoji && <span className="item-emoji">{emoji}</span>}
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <p className="item-meta">{quantity} · {category}</p>
      </div>
    </li>
  );
}