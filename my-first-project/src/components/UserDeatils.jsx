import React, { useState } from 'react'

const UserDeatils = () => {
    const [user,setUser] = useState({name:"TOM",email:"tom@gmail.com",age:20})
    const [contactNumber, setContactNumber] = useState()
    function handleAgeUpdate(){
        setUser({...user,age:21})
    }
    function handleGetContactDetails(){
        console.log("BUTTON CLICK********")
        console.log(contactNumber,"contactNumber")
        console.log({...user,contactNumber:contactNumber})
        // const updatedUser = {...user,contactNumber:contactNumber}
        setUser((prevUser)=>({...prevUser,contactNumber:contactNumber}))

        // setUser((p)=>{
        //     return {...p,contactNumber:contactNumber}
        // })
        console.log(user,"In button")
    }

        console.log(user,"After update")




  return (
    <div>
        UserDeatils 
        <button onClick={handleAgeUpdate}>Update Age</button>
        <h3>{user.name}</h3>
        <h4>{user.email}</h4>
        <h5>{user.age}</h5>
        <code>{user.contactNumber}</code>
<hr />

        <input type='text' 
        // value={7878787878}
            onChange={(e)=>setContactNumber(e.target.value)}
        />
        <button onClick={handleGetContactDetails}>Get Contact Details</button>
        
        
    </div>
  )
}

export default UserDeatils