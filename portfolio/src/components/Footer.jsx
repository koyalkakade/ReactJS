import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import '../App.css'

const Footer = () => {
  return (

    <>
      <div>Footer</div>
      <Link to='/contact_me'>Contact me</Link>
      Social media icons

      <div className="container d-flex justify-content-center">
        <div>
          <a href='#' className='nav-link customIcon'>
            <FaGithubSquare size={50} />
          </a>
        </div>
        <div>
          <a href='#'  className='nav-link customIcon'>

            <FaLinkedin size={50}/>
          </a>
        </div>
        <div>
          <a href='#'  className='nav-link customIcon'>

            <FaInstagramSquare size={50}/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer