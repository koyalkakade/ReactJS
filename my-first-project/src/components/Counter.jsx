import React, { useState } from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Counter = () => {

    const [count, setCount] = useState(100)
    const [theme, setTheme] = useState('light')
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    function handleIncreament() {
        setCount((c) => c + 1)
    }

    const handleDecreament = () => {
        setCount(c => c - 1)
    }

    function expensiveCalculation(number) {
        for (let i = 0; i <= 10; i++) { console.log('calculllll') }
        return number * 2
    }
    const result = useMemo(() => {
        return expensiveCalculation(count)
    }, [count])

    function handdleTheme() {
        setTheme(prev => prev == 'light' ? 'dark' : 'light')
    }
    return (
        <div style={{ height: "400px" }}>

            <h1> Counter : {count}</h1>
            <h2>Previous Count:{prevCount.current}</h2>
            <h3>Result for expensive calculation:{result}</h3>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <button onClick={() => setCount(count - 1)}>Decreament</button>
            <button onClick={() => setCount(100)}>Reset</button>
            <hr />
            <button onClick={handleIncreament}>Increament By Function</button>
            <button onClick={handleDecreament}>Decreament By Function</button>
            <hr />

            <button onClick={() => handdleTheme()}>{theme}</button>
        </div>
    )
}

export default Counter