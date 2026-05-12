import React from 'react'
import { useState } from 'react'

const EvenOdd = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>1. EvenOdd</div>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <p>
                {count % 2 === 0 ? "This is an Even number" : "This is an Odd number"}
            </p>
        </>
    )
}

export default EvenOdd