import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Appcontext= createContext()

export default function Appcontextprovider({children}){
 const [makeupdata,setMakeupdata]=useState([])
 const [bestseller,setBestseller]= useState([])
 const [latestproduct,setlatestproduct]=useState([])
 const [mostviewed,setmostviewed]= useState([]) 
 const [prod,setprod]=useState([])
 const [skin,setskin]=useState([])
 const [login,setlogin]=useState(false)

      function getdata(){
        axios.get(` http://localhost:8080/makeup`)
        .then((res)=>{
           setMakeupdata(res.data)
        })

        axios.get(`http://localhost:8080/bestseller`)
        .then((res)=>{
           setBestseller(res.data)
        })

        axios.get(` http://localhost:8080/latestproduct`)
        .then((res)=>{
           setlatestproduct(res.data)
        })

        axios.get(` http://localhost:8080/mostviewed`)
        .then((res)=>{
           setmostviewed(res.data)
        })
        axios.get(` http://localhost:8080/prod`)
        .then((res)=>{
           setprod(res.data)
        })
        axios.get(` http://localhost:8080/skin`)
        .then((res)=>{
           setskin(res.data)
        })
        
        
      }

      useEffect(()=>{
      getdata()
      },[])
     
    return (
        <Appcontext.Provider value={{makeupdata,bestseller,latestproduct,mostviewed,prod,login}}>
            {children}
        </Appcontext.Provider>
    )
}