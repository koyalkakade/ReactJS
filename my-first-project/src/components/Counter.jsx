import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(100)

function handleIncreament(){
    setCount((c)=>c+1)
}

const handleDecreament = ()=>{
    setCount(c=>c-1)
}



  return (
    <div style={{height:"400px"}}>
        
       <h1> Counter : {count}</h1>

       <button onClick={()=>setCount(count+1)}>Increament</button>
       <button onClick={()=>setCount(count-1)}>Decreament</button>
        <button onClick={()=>setCount(100)}>Reset</button>
        <hr />
        <button onClick={handleIncreament}>Increament By Function</button>
        <button onClick={handleDecreament}>Decreament By Function</button>
        </div>
  )
}

export default Counter