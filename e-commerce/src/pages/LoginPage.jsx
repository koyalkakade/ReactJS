import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify'

const LoginPage = ({setLoggedUSer}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [regUser, setRegUser] = useState({})

    const navigate = useNavigate()



    function handleLogin(e) {
        e.preventDefault()
        console.log(email, password, "************")
        console.log(regUser,"regUser in login")
        if (email == regUser.email && password == regUser.password) {
            console.log(regUser)
            setLoggedUSer(regUser)
            toast.success("Login successfully")
            navigate('/dashboard',)
        } else {
            toast.error("invalid credentials", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            })
            navigate('/')
        }
    }

function fetchData(){
      const regUser1 = JSON.parse(localStorage.getItem("user81"))
        setRegUser(regUser1)
}


    useEffect(()=>{
  fetchData()
    },[])


        console.log("**************REG USER*********",regUser)


    return (
        <div className='container w-50 p-5 mt-5 bg-info rounded'>
            <h3>Login here...</h3>
            <form onSubmit={handleLogin}>
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

                <button type="submit" className="btn btn-primary">Login</button>
                <Link to='/register' >If not registered</Link>
            </form>

            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce} />
        </div>
    )
}

export default LoginPage