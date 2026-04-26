import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import iPhone17 from './assets/apple17.webp'
import Product from './components/Product'
import Button from './components/Button'
import ClassBasedProduct from './components/ClassBasedProduct'
import Greet from './components/Greet'
import Counter from './components/Counter'
import UserDeatils from './components/UserDeatils'
import UserDetails1 from './users/UserDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserMoreInfo from './components/UserMoreInfo'

function App() {
  const [count, setCount] = useState(0)
  const subheading = {
    textAlign: 'center',
    textShadow: '2px 2px 1px red'
  }
  return (
    <>
      {/* <UserDetails1 /> */}
      <Router>
        <Routes>
          <Route path="/" element={<UserDetails1 />} />
          <Route path='/moreInfo/:id' element={<UserMoreInfo />}></Route>
        </Routes>
      </Router>


      {/* <Counter /> */}


      {/* <Greet user={{ name: 'Sana', session: 5, exam: 0 }} />
      <Greet user={{ name: 'Shivam', session: 2, exam: 10 }} />
      <Greet user={{ name: 'Akash', session: 0, exam: 10 }} />
      <Greet user={{ name: 'Nayan', session: 10, exam: 20 }} /> */}


      {/* <h1 style={{ color: "red", textAlign: 'center' }}>Hello World </h1>
      <h3 style={subheading}>Welcome to my REact tutorial</h3>
      {/* <button>Register</button> */}
      {/* <Button text123="Registerrrrrrrrr" />
      <Product ></Product>
      <ClassBasedProduct />  */}


    </>
  )
}

export default App