import React from 'react'
import UseProducts from '../customHook/UseProducts'

const Products = () => {
    const { data, loading, error } = UseProducts("https://dummyjson.com/products")
    console.log('data.Products', data)

    if (loading) return <p>Loding...</p>
    if (error) return <p>Error in API</p>
    return (
        <>
            <div>Products</div>
            <p>Render products here.....</p>
            <div className='container'>
                {data.products?.map((p, i) => (
                    <div className='row' style={{ display: "flex", justifyContent: "space-around"}}  key={i}>
                        <div className='col-2 border'><b>{p.id}. {p.title}</b></div>
                        <div className='col-10 border'>{p.description}</div>
                        <hr></hr>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products