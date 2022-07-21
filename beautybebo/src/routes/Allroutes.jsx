import React from 'react'
import { Route,Routes } from 'react-router'
import Home from '../Home/Home'
import Login from '../Login-signup/Login'
import Resister from '../Login-signup/Resister'

const Allroutes = () => {
  return (
    <div>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/signup" element={<Resister/>}/>
           <Route path="/login" element={<Login/>}/>
        </Routes>
        
    </div>
  )
}

export default Allroutes