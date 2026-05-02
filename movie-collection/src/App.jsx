import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MovieDetails from './components/MovieDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
<Router>
  <Routes>
            <Route path='/' element={<Dashboard />}></Route>
             <Route path='/moreInfo/:id' element={<MovieDetails />}></Route>
  </Routes>
</Router>
      
    </>
  )
}

export default App
