import React from 'react'

const Comments = () => {

    const comm = ["Good project", "UI is strong","Nice Animations"]

  return (
    <>
    <div>Comments</div>
    {
        comm.map((c,i)=>(
            <div key={i}>
            <span class="badge text-bg-warning">{c}</span> 
            </div>
        ))
    }
    </>
  )
}

export default Comments