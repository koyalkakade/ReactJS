import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(0);       // time in seconds
    const [isRunning, setIsRunning] = useState(false);


    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000); // update every second
        }

        // cleanup when component unmounts or isRunning changes
        return () => clearInterval(interval);
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };



    return (
        <>
            {/* <div>2. StopWatch</div>
            <h2>Time:{time}</h2>
            <button onClick={() => isRunning(true)}>Start</button>
            <button onClick={() => isRunning(false)}>Stop</button>
            <button onClick={() => { setTime(0), isRunning(false) }}>Reset</button> */}
            <div style={{ padding: "20px" }}>
                <h2>2. Stopwatch</h2>
                <p>{time} seconds</p>
                <button onClick={start} disabled={isRunning}>Start</button>
                <button onClick={stop} disabled={!isRunning}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default StopWatch