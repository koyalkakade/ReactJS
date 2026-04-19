import React from 'react'
import imgone from '../assets/aasha.jpeg'
import imgtwo from '../assets/aasha-bhosale.webp'
import "./HeroSection.css"

const HeroSection = () => {
    return (
        <div className="container-fluid" style={{height:"500px"}}>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgone} className="d-block customImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imgtwo} className="d-block customImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://m.media-amazon.com/images/I/71qkzReRXjL._AC_UF1000,1000_QL80_.jpg" className="d-block customImg" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HeroSection

