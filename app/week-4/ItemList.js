import Item from "./Item";
import jsonItems from "./Items.json";

export default function ItemList() {
    return (
       <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
       {jsonItems.map((item) =>(
        <Item key ={item.id} {...item} />
        ))}
       </ul>
    );
}