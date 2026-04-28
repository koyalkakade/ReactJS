import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import ProductDetails from './Components/ProductDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {

  const [loggedUser, setLoggedUSer] = useState()


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage setLoggedUSer={setLoggedUSer} />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/dashboard' element={<Dashboard loggedUser={loggedUser} />}></Route>
        <Route path='/product/:ID' element={<ProductDetails loggedUser={loggedUser}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App