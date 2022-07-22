import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Appcontext= createContext()

export default function Appcontextprovider({children}){
   
   const [total,settotal]=useState(0)
  const [c,setc]=useState(false)
   const [cart,setcart]=useState([])
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

      function getdata(mpage){
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


      function onclickaddcart(id,name,img,price){
         axios({
            url:`http://localhost:8080/cart`,
            method:"POST",
            data:{
               id:id,
               name:name,
               img:img,
               price:price,
            }
         })
         
         setc(!c)
      }

      // function addintotal(p){
      //    axios({
      //       url:`http://localhost:8080/total`,
      //       method:"POST",
      //       data:{
      //          id:Date.now(),
      //          price:p,
      //       }
      //    })
      // }

      // useEffect(()=>{
      //    addintotal(parameter)
      // },[secondcall])

      function updatecart(){
         axios.get(` http://localhost:8080/cart`)
         .then((res)=>{
            setcart(res.data)
         })
      }
     
      // function calculatetotal(){
      //   cart.map((item)=>(
      //    axios({
      //          url:`http://localhost:8080/total`,
      //          method:"POST",
      //          data:{
      //            id:Date.now(),
      //             price:item.price,
      //          }
      //       })
      //    ))     

      // }
    
        function gettotal(){
         updatecart()
         const arr=[]
         cart.map((item)=>(
            arr.push(item.price)
         ))
         
         if(cart.length>0){
            const output=arr.reduce((acc,curr)=>{
               acc=acc+curr;
               return acc
              },0)
              settotal(output)
         }
     
        }

        useEffect(()=>{
         console.log("rotal",total)
            gettotal()
         
        },[c])
    
   
    return (
        <Appcontext.Provider value={{makeupdata,bestseller,latestproduct,
         fillsignupdata,logindata,setlogindata,changepage,load,mpage,spage,skin,changeskinpage,
         onclickaddcart,cart,total,c,
       mostviewed,prod,login,setlogin}}>
            {children}
        </Appcontext.Provider>
    )
}