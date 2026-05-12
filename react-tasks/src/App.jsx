import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EvenOdd from './components/EvenOdd'
import StopWatch from './components/StopWatch'
import RandomJokeGenerator from './components/RandomJokeGenerator'
import LoginForm from './components/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ShowProductFromLocalArr from './components/ShowProductFromLocalArr'
import AddItemToCart from './components/AddItemToCart'
import RemoveItemFromCart from './components/RemoveItemFromCart'
import { CartProvider } from './components/CartProvider'
import Navbar from './components/Navbar'
import { Dashboard } from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)
  const [loggedUser, setLoggedUSer] = useState()
  console.log('loogged user app',loggedUser)
  const[cartVal,setCartVal]=useState([])

  return (
    <>
    <CartProvider.Provider value={{cartVal,setCartVal}}>
      <Router>      
        <Routes>        
          <Route path="/" element={<EvenOdd />} />
          <Route path="/StopWatch" element={<StopWatch />} />
          <Route path="/RandomJokeGenerator" element={<RandomJokeGenerator />} />
          <Route path="/LoginForm" element={<LoginForm setLoggedUSer={setLoggedUSer}/>} />
          <Route path='/ShowProductFromLocalArr' element={<ShowProductFromLocalArr />}></Route>
          <Route path='/AddItemToCart' element={<AddItemToCart/>}></Route>
          <Route path='/RemoveItemFromCart' element={<RemoveItemFromCart/>}></Route>
          <Route path='/dashboard' element={<Dashboard loggedUser={loggedUser}/>}></Route>
        </Routes>
      </Router>
      </CartProvider.Provider>
    </>
  )
}

export default App
