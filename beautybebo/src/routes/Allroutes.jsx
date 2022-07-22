import React from 'react'
import { Route,Routes } from 'react-router'
import Home from '../Home/Home'
import Login from '../Login-signup/Login'
import Resister from '../Login-signup/Resister'
import Cartpage from '../pages/Cartpage'
import Makeup from '../pages/Makeup'
import Skin from '../pages/Skin'

const Allroutes = () => {
  return (
    <div>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/signup" element={<Resister/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/skin" element={<Skin/>}/>
           <Route path="/makeup" element={<Makeup/>}/>
           <Route path="/cart" element={<Cartpage />}/>
        </Routes>
        
    </div>
  )
}

export default Allroutes