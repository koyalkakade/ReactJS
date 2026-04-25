import React from 'react'
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { LiaSignOutAltSolid } from "react-icons/lia";
import '../index.css'
import { Link } from 'react-router-dom';

const Navbar = ({ loggedUser }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Savana</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><span className='me-1'><FaHome /></span>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><span className='me-1'><IoMdContact /></span>About Us</a>
                        </li>

                    </ul>
                    <div className="d-flex">
                        <i className='me-3'>Welcome, {loggedUser.userName}</i>
                        <span className='me-3'><FaShoppingCart /><sup className='badge badge-pill badge-danger me-4'></sup></span>
                           <Link className="nav-link active" aria-current="page" to="/"> <span title="Sign Out" style={{ cursor: "pointer" ,marginRight:"2px" }}>
                                <LiaSignOutAltSolid />
                            </span></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar