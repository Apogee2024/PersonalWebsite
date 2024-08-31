import items from "../data/items";
import OrderRow from "./OrderRow";

function OrderTable( ) {
    return (
    
    <table>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
    {items.map((item, i) => <OrderRow item={item} key={i} />)}
        
    </table>
    )
}
export default OrderTable;