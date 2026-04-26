import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

const UserMoreInfo = () => {
    const { id } = useParams({});
    const location = useLocation();
    const user = location.state?.user;
    //    console.log('user',user)        
 const [date, time] = user.dob.date.split("T");

    return (
        <>
            <div style={{ margin: "20px", fontWeight: "bold" }}>User More Info : </div>
            {<div className="row">
                <div className="col-12 col-md-6 grid-container border p-3 rounded text-center">
                    <img src={user.picture.large} alt="Description" />
                    <img src={user.picture.medium} alt="Description" />
                     <img src={user.picture.thumbnail} alt="Description" />
                </div>
                <div className="col-12 col-md-5 ms-3 border rounded" >
                    <div >
                    <h4>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
                    <h6><b>Gender: </b> {user.gender}</h6>
                    <h6><b>City: </b> {user.location.city}</h6>
                    <h6><b>State: </b> {user.location.state}</h6>
                    <h6><b>Country: </b>{user.location.country}</h6>
                    <h6><b>Country: </b>{date}</h6>
                   <h6><b>Country: </b>{user.dob.age}</h6>
                    </div>
                </div>
            </div>}
        </>


    )
}

export default UserMoreInfo