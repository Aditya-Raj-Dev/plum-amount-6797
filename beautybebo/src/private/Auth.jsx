import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import {useNavigate,Navigate,useLocation} from "react-router-dom"


const Auth = ({children}) => {
  const {login}= useContext(Appcontext)
  const navigate= useNavigate()
  const {pathname}=useLocation()

  if(!login){
   return <Navigate to="/signup" state={{from:pathname}} replace/>
  }
  return (
    <div>
      {children}  
    </div>
  )
}

export default Auth