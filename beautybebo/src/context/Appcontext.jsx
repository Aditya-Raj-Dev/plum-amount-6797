import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Appcontext= createContext()

export default function Appcontextprovider({children}){
 const [makeupdata,setMakeupdata]=useState([])
 const [bestseller,setBestseller]= useState([])
 const [latestproduct,setlatestproduct]=useState([])
 const [mostviewed,setmostviewed]= useState([]) 

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
        
      }

      useEffect(()=>{
      getdata()
      },[])
     
    return (
        <Appcontext.Provider value={{makeupdata,bestseller,latestproduct,mostviewed}}>
            {children}
        </Appcontext.Provider>
    )
}