import Item from "./item";
import jsonItems from "./items.json";

export default function ItemList() {
    return (
       <ul className="">
       {jsonItems.map((item) =>(
        <Item key ={item.id} {...item} />
        ))}
       </ul>
    );
}