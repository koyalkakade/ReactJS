import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import '../index.css'

const ProductDetails = ({loggedUser}) => {
  const prodId = useParams({})
  // console.log('prod-id',prodId.ID)

  const [products, setProducts] = useState([])

  async function fetchData() {
    try {
      const res = await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
      if (res.ok) {
        const data = await res.json()
        console.log('data', data)
        const filterIdData = data.find((i) => i.id == prodId.ID)
        setProducts(filterIdData)
        console.log('filterIdData', filterIdData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Navbar loggedUser={loggedUser} />
      <h4 style={{ margin: "20px", fontWeight: "bold" }}>Product Details : </h4>
      <div className="row prodDetail-Container" style={{height:"380px"}}>
        <div className="col-12 col-md-6 grid-container border p-3 rounded">
          <img src={products.image} alt="Description" />
          <img src={products.image} alt="Description" />
        </div>
        {/* <div className='col-1'></div> */}
        <div className="col-12 col-md-5 pt-3 ps-5 border rounded">
          <h4>{products.name} : </h4>
          <h6 className='text-secondary'>{products.description}</h6>
          <div className='mb-2'>
            <FaStar className='checked' />
            <FaStar className='checked' />
            <FaStar className='checked' />
            <FaStar />
            <FaStar />
            <span style={{ color: "gray", marginLeft: "8px" }}>({products.rating})</span><br></br>
          </div>
          <button className='btn btn-success mb-2'><MdCurrencyRupee /><span style={{ fontSize: "20px" }}>{products.price}</span></button><br></br>
          {/* <span style={{textDecoration: "line-through"}}>MRP: ₹1000</span> */}
          <span>MRP: <del>₹1000</del><small className='text-secondary ms-1'>(incl. of all taxes)</small></span><br></br>
          <span>Delivery Charges: <MdCurrencyRupee />40</span><br></br>
          <span>Delivery on <b>Fri,6 Mar</b></span><br></br>
          <span className='text-secondary' >Category: {products.category}</span>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetails