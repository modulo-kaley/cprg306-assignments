export default function Item({ name, quantity, category }) {
  return (
    <li className="
      rounded-lg
      bg-earth-bison dark:bg-earth-soya
      border border-earth-stonewall/30
      px-6 py-4
      flex flex-col gap-1
    ">
      <h3 className="font-serif text-lg text-earth-armadillo dark:text-earth-pearl">
        {name}
      </h3>
      <p className="font-sans text-sm text-earth-stonewall dark:text-earth-oyster">
        {quantity} · {category}
      </p>
    </li>
  );
}