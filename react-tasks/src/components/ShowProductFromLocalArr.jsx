import React from 'react'
import { CalculateTotalPrice } from './CalculateTotalPrice';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 200 }
];

const intialState = 0;



const ShowProductFromLocalArr = () => {
    const [state, cartDispatch] = useReducer(CalculateTotalPrice, intialState)
    const [search, setSearch] = useState("");
    const [fildt, setFildt] = useState([])

    console.log('state....', state)

    function handleAddToCart({ p, t }) {
        console.log("Product Name:", p.name);
        cartDispatch({ type: "ADD", payload: { prod_id: p.id, prod_Name: p.name, prod_price: p.price } })
    }

    useEffect(() => {
        const filterdt = products.filter((prod) => {
           return prod.name.toLowerCase().includes(search.toLowerCase());
           
        })
        setFildt(filterdt)
    }, [search,products])

    const dataToRender = fildt.length > 0 ? fildt : products;

    return (
        <>
           10. <input className='m-5' type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h3>5. Show Product From Local Arrary</h3>
                {dataToRender.map((p) => (
                    <div key={p.id}>
                        <h3>{p.name}</h3>
                        <p>${p.price}</p>
                        <button className='btn btn-primary' onClick={() => handleAddToCart({ p, type: "ADD" })}>Add To Cart</button>
                    </div>
                ))}<br></br>
                <b>9. Calculate Total:{state}</b>
            </div>
        </>
    )
}

export default ShowProductFromLocalArr