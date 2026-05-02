
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CreateTaskForm from './components/CreateTaskForm'
import { tasks } from './data.js'
import EditForm from './components/EditForm.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './components/Footer.jsx'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage data={tasks} />}></Route>
        <Route path='/create' element={<CreateTaskForm />}></Route>
        <Route path='/edit/:ID' element={<EditForm />}></Route> 
         </Routes>
         <Footer></Footer>
    </BrowserRouter>
  )
}

export default App