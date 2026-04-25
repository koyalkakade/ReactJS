import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../index.css'

const Card = ({ product }) => {
  const [p, setP] = useState()
  //console.log('product',product)
  // useEffect=(()=>{
  // setP(product)
  // },[])

  return (
    <div className="card mb-4" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <button className="btn btn-primary">Add to Bag</button>
        <Link to={`/product/${product.id}`} className='btn btn-success ms-2'>Explore</Link>
        <Outlet />
      </div>
    </div>
  )
}

export default Card