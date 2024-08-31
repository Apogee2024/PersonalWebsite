import React from 'react';
import SelectQuantity from './SelectQuantity';


// the {} means object destructuring it is not optional!
function OrderRow({ item }) {
    return (
        <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td><SelectQuantity /> </td>
        </tr>
    );
}

export default OrderRow;