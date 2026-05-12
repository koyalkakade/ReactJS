import React from 'react'
import { useState } from 'react';

const RemoveItemFromCart = () => {
    const [cart, setCart] = useState(["Laptop", "Phone"]);

    const removeItem = (item) => {
        setCart(cart.filter((val) => val != item))
    };
    console.log('cart', cart)
    return (
        <>
            <div>7. Remove Item From Cart</div>
             <p>Cart: {cart.length > 0 ? cart : 'empty'}</p>
            <button className='btn btn-primary me-2' onClick={() =>cart.length>0? removeItem("Laptop"):' '}>Remove Laptop</button>
            <button className='btn btn-primary' onClick={() => cart.length>0?removeItem("Phone"):''}>Remove Phone</button>
        </>
    )
}

export default RemoveItemFromCart