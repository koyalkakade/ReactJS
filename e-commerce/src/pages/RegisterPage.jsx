import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const RegisterPage = () => {
    const [name,setName] =useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const handleRegister = (e) =>{
        e.preventDefault()
        const regUser = {
            userName:name,
            email:email,
            password:password
        }

        localStorage.setItem('user81', JSON.stringify(regUser))
        toast.success("Register successful")
    }



  return (
     <div className='container w-50 p-5 mt-5 bg-info rounded'>
            <h3>Register here...</h3>
            <form onSubmit={handleRegister}>
                          <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputName" placeholder=""
                        // value="Jerry" 
                        // name={userName}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="floatingInputName">
                        User Name
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                        // value="Jerry" 
                        // name={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-5">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
                <Link to='/' >already registered</Link>
            </form>
            <ToastContainer />
            </div>
  )
}

export default RegisterPage