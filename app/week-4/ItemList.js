import Item from "./Item";
import jsonItems from "./Items.json";

export default function ItemList() {
    return (
       <ul className="">
       {jsonItems.map((item) =>(
        <Item key ={item.id} {...item} />
        ))}
       </ul>
    );
}