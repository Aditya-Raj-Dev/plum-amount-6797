import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Appcontext= createContext()

export default function Appcontextprovider({children}){
   const [load,setload]=useState(false)
 const [makeupdata,setMakeupdata]=useState([])
 const [mpage,setmpage]=useState(1)
 const [spage,setspage]=useState(1)
 const [bestseller,setBestseller]= useState([])
 const [latestproduct,setlatestproduct]=useState([])
 const [mostviewed,setmostviewed]= useState([]) 
 const [prod,setprod]=useState([])
 const [skin,setskin]=useState([])
 const [login,setlogin]=useState(false)
 const [logindata,setlogindata]=useState({
   fname:"",
   lname:"",
   email:"",
   phone:"",
   pass:""
 })

 function fillsignupdata(e){
  const {name,value}=e.target;
  setlogindata({...logindata,
   [name]:value,
})
 }

      function getdata(mpage,spage){
        axios.get(` http://localhost:8080/makeup?_page=${mpage}&_limit=18`)
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
        
        
      }

      function getskindata(spage){
         axios.get(` http://localhost:8080/skin?_page=${spage}&_limit=18`)
         .then((res)=>{
            setskin(res.data)
         })
      }

      function changepage(mpage){
          setload(true)
         setTimeout(()=>{
            setload(false)
            getdata(mpage)
         },1000)
      }

      function changeskinpage(spage){
         setload(true)
        setTimeout(()=>{
           setload(false)
           getskindata(spage)
        },1000)
     }

      useEffect(()=>{
      getdata()
      getskindata()
      },[mpage,spage])


     
    return (
        <Appcontext.Provider value={{makeupdata,bestseller,latestproduct,
         fillsignupdata,logindata,setlogindata,changepage,load,mpage,spage,skin,changeskinpage,
        mostviewed,prod,login,setlogin}}>
            {children}
        </Appcontext.Provider>
    )
}