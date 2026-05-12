import React from 'react'
import { useState } from 'react';
import { CartProvider } from './CartProvider';
import { useContext } from 'react';
import Navbar from './Navbar';
import { toast } from "react-toastify";


const AddItemToCart = () => {
    const { cartVal, setCartVal } = useContext(CartProvider);
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        // setCart([...cart, item]);
        // setCartVal([...cartVal, item])
        toast.success(`${item} added to cart!`);

    }
    //console.log('cart',cart)
    return (
        <>
            <Navbar />
            <div style={{ padding: "20px", textAlign: "center" }}>
                <div >6. Add Item To Cart</div><br></br>
                <button className='btn btn-primary me-2' onClick={() => addItem("Laptop")}>Add Laptop</button>
                <button className='btn btn-primary' onClick={() => addItem("Phone")}>Add Phone</button>
                <p>Cart: {cart.length > 0 ? cart.join(", ") : 'empty'}</p>
            </div>

        </>

    )
}

export default AddItemToCart