import Payment from 'payment'
import React, { useState } from 'react'
import { Route,Routes } from 'react-router'
import Home from '../Home/Home'
import Login from '../Login-signup/Login'
import Resister from '../Login-signup/Resister'
import Cartpage from '../pages/Cartpage'
import Checkout from '../pages/Checkout'
import Makeup from '../pages/Makeup'
import Orderplaced from '../pages/Orderplaced'
import CreditCard from '../pages/Payment'
import Shipping from '../pages/Shipping'
import Skin from '../pages/Skin'
import Auth from '../private/Auth'

const Allroutes = () => {

  
  return (
    <div>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/signup" element={<Resister/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/skin" element={<Skin/>}/>
           <Route path="/makeup" element={<Makeup/>}/>
           <Route path="/cart" element={<Cartpage /> }/>
           <Route path="/shipping" element={<Auth>
           <Shipping />
           </Auth>}/>
           <Route path="/checkout" element={<Checkout/> }/>
           <Route path="/payment" element={<CreditCard/> }/>
           <Route path="/order" element={<Orderplaced/> }/>
        </Routes>
       
        
    </div>
  )
}

export default Allroutes