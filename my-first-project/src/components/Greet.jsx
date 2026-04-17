
import React from 'react'

const Greet = ({user}) => {

    // console.log(props)
    console.log("********************")
    // const u = user 
    // console.log(u)

  return (
    <>
    <div>Hello {user.name}</div>
    <p>Welcome to Tutorial </p>
    <p>You have completed {user.session} sessions with {user.exam} Exams</p>
    </>
  )
}

export default Greet
