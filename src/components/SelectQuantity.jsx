import {MdAddBox} from 'react-icons/md';
import {MdIndeterminateCheckBox} from 'react-icons/md';

import {useState } from "react";

function SelectQuantity(){
    
    const [itemQuantity, setQuantity] = useState(0);
    
    function updateQuantity(sign) {
        let newQuantity  = itemQuantity + sign
        if (newQuantity > -1 && newQuantity < 11){
            setQuantity(newQuantity)
    }
    }

    function increaseQuantity() {
        updateQuantity(1)
    }
    
    function decreaseQuantity() {
        updateQuantity(-1)
    }
    return (
        <>
        
        
            
            <td>{itemQuantity} </td>
            <td>
            <MdAddBox onClick ={increaseQuantity} />
            <MdIndeterminateCheckBox onClick ={decreaseQuantity} />
            </td>
        
        
        </>

    )
}
// all event handlers are in camel case
export default SelectQuantity;