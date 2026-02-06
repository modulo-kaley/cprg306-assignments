export default function Item(name, quantity, category){
    return (
        <li>
            <h3 className="">{name}</h3>
            <p className="">{quantity} {category}</p>
        </li>

    );
}