import { useEffect } from 'react';
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom'


const LoginForm = ({ setLoggedUSer }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const navigate=useNavigate()

    function fetchData() {
        const regUser1 = JSON.parse(localStorage.getItem("user81"))
        setLoggedUSer(regUser1)
        console.log('regUser1',regUser1)
        if(regUser1){
             navigate('/dashboard')
        }
    }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    const validate = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email format is invalid";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const  handleSubmit = async(e) => {
        e.preventDefault();
        if (validate()) {
            // toast.success("Login Successful..", {
            //     position: "top-right",
            //     autoClose: 3000,
            // });
            await toast.success("Login successfully")
            //  alert("Login successful!");
           setTimeout(()=>{fetchData()},4000) 
        }
    };

    return (
        <>
            <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
                <h2>4. Login Form</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label><br />
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                    </div>

                    <div>
                        <label>Password:</label><br />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                    </div>

                    <button type="submit" >Login</button>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default LoginForm