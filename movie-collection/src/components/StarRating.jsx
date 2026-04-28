import React from 'react'
import { FaStar } from "react-icons/fa";


function StarRating({rating}) {
  return (   
      <div>
      {[...Array(5)].map((v, i) => {
        const starValue = i + 1;
        const className = starValue <= rating ? "checked" : " ";
        return  <FaStar key={starValue} className={className}/>
      })}
      </div>
  )
}

export default StarRating