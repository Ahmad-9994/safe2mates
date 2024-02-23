import React, {useContext } from 'react'
import { globalData } from '../Context'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
   const navigate = useNavigate();
  const userId=localStorage.getItem("id")
  console.log(userId)

    if(userId){
    return children
  }
  else{
     navigate("/login")
  }  
 

}

export default ProtectedRoute
