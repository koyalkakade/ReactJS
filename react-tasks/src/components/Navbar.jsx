import React from 'react'
import { useContext } from 'react'
import { CartProvider } from './CartProvider'

const Navbar = () => {
    const {cartVal}=useContext(CartProvider)
  return (
      <h2>8. 🛒 Cart Items: {cartVal.length}</h2>

  )
}

export default Navbar