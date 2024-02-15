import React, {useContext } from 'react'
import { globalData } from '../Context'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
   const navigate = useNavigate();
  const {islogin} = useContext(globalData)

 
    console.log("IS LOGIN: ", islogin)

    if(islogin){
    return children
  }
  else{
     navigate("/login")
  }  
 

}

export default ProtectedRoute
