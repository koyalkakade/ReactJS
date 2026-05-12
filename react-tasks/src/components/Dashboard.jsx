import React from 'react'
import { Navigate } from "react-router-dom";

export const Dashboard = ({ loggedUser }) => {
     console.log("Dashboard", loggedUser)
  return (
    <div>11. Welcome , 
        {
            loggedUser ? loggedUser.userName : <Navigate to="/LoginForm" />
        }
    </div>
  )
}
