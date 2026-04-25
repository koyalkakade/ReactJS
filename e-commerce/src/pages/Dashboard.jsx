import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import Category from '../Components/Category'

const Dashboard = ({ loggedUser }) => {
  console.log("Dashboard", loggedUser)
  return (
    <>

      <Navbar loggedUser={loggedUser} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-secondary text-white">
            <div style={{ position: 'sticky', top: '80px' }}>
              <input type='search' className='form-control mb-2' />
              <button className='btn btn-primary'>Search</button>
              <div>Filter</div>
              add drop down for filter
            </div>
          </div>
          <div className="col-10">
            <Category />
            <ProductList />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Dashboard