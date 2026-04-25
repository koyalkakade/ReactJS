import React, { useState, useEffect } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import '../index.css'

// const texts = ["Welcome!", "Sign Out", "Hello User", "React is fun!", "Enjoy Coding!", "Stay Creative!"];

const Category = () => {
    const [index, setIndex] = useState(0);
    const visibleCount = 5; // how many texts to show at once

    const [products, setProducts] = useState([])

    async function fetchData() {
        try {
            const res = await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
            if (res.ok) {
                const data = await res.json()
                console.log('data', data)
                const uniqueCategory = [...new Map(data.map(item => [item.category, item])).values()];
                setProducts(uniqueCategory)
                // console.log('uniqueCategory', uniqueCategory)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleNext = () => {
        setIndex((prevIndex) =>
            prevIndex + 1 >= products.length ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setIndex((prevIndex) =>
            prevIndex - 1 < 0 ? products.length - visibleCount : prevIndex - 1
        );
    };

    // console.log('index', index)
    return (
        <div className='slider-container'>
            {/* Left Arrow */}
            <button onClick={handlePrev} className='leftIcon' disabled={index === 0}>
                <FaArrowCircleLeft />
            </button>

            {/* Visible Texts */}
            <div className='slider'>
                {products.slice(index, index + visibleCount).map((prod, i) => (
                    <div key={i} style={{color: "#660d0d"}}><u>{prod.category}</u></div>
                ))}
            </div>

            {/* Right Arrow */}
            <button onClick={handleNext} className='rightIcon' disabled={index >= products.length - visibleCount}>
                <FaArrowCircleRight />
            </button>
        </div>
    )
}

export default Category



