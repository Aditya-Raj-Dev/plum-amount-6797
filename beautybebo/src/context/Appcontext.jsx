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
         
        axios.get(`https://beautybeboplumamount.herokuapp.com/makeup?_page=${mpage}&_limit=18`)
        .then((res)=>{
         
           setMakeupdata(res.data)
        }).catch((err)=>{
         console.log(err)
        })

        axios.get(`https://beautybeboplumamount.herokuapp.com/bestseller`)
        .then((res)=>{
         
           setBestseller(res.data)
        }).catch((err)=>{
         console.log(err)
        })

        axios.get(`https://beautybeboplumamount.herokuapp.com/latestproduct`)
        .then((res)=>{
         
           setlatestproduct(res.data)
        }).catch((err)=>{
         console.log(err)
        })

        axios.get(`https://beautybeboplumamount.herokuapp.com/mostviewed`)
        .then((res)=>{
         
           setmostviewed(res.data)
        }).catch((err)=>{
         console.log(err)
        })

        axios.get(`https://beautybeboplumamount.herokuapp.com/prod`)
        .then((res)=>{
       
           setprod(res.data)
        }).catch((err)=>{
         console.log(err)
        })
        
      
      }

      function getskindata(spage){
         axios.get(`https://beautybeboplumamount.herokuapp.com/skin?_page=${spage}&_limit=18`)
         .then((res)=>{
            setskin(res.data)
         }).catch((err)=>{
            console.log(err)
           })
      }

      function changepage(mpage){
         setmpage(mpage)
          setload(true)
         setTimeout(()=>{
            setload(false)
            getdata(mpage)
            
         },1000)
      }

      function changeskinpage(spage){
         setspage(spage)
         setload(true)
        setTimeout(()=>{
           setload(false)
           getskindata(spage)
        },1000)
     }

     


      function onclickaddcart(id,name,img,price){
         axios({
            url:`https://beautybeboplumamount.herokuapp.com/cart`,
            method:"POST",
            data:{
               id:id,
               name:name,
               img:img,
               price:price,
               qty:1,
            }
         })
         setc(!c)
      }

      // function addintotal(p){
      //    axios({
      //       url:`http://:/total`,
      //       method:"POST",
      //       data:{
      //          id:Date.now(),
      //          price:p,
      //       }
      //    })
      // }


    



      useEffect(()=>{
         getdata()
         getskindata()
         },[mpage,spage,c])
     
      // function calculatetotal(){
      //   cart.map((item)=>(
      //    axios({
      //          url:`http://:/total`,
      //          method:"POST",
      //          data:{
      //            id:Date.now(),
      //             price:item.price,
      //          }
      //       })
      //    ))     

      // }
      function updatecart(){
         axios.get(`https://beautybeboplumamount.herokuapp.com/cart`)
         .then((res)=>{
            const output=res.data.reduce((acc,curr)=>{
               return acc+curr.price*curr.qty;
              // return acc
             },0)
             settotal(output)
             
            setcart(res.data)
         })
      }
      const carttotal=cart.length
      //   function gettotal(){
      //    updatecart()
      //    const arr=[]
      //    cart.map((item)=>(
      //       arr.push(item.price)
      //    ))
         
        
      //       const output=arr.reduce((acc,curr)=>{
      //           return acc+curr;
      //          // return acc
      //         },0)
      //         console.log("o",output)
      //         settotal(output)
            
      
      //   console.log("output")
      //   }

        useEffect(()=>{
            // gettotal()
            updatecart()
        },[c])
        
    
   
    return (
        <Appcontext.Provider value={{makeupdata,bestseller,latestproduct,
         fillsignupdata,logindata,setlogindata,changepage,load,mpage,spage,skin,changeskinpage,
         onclickaddcart,cart,total,c,setc,carttotal,
       mostviewed,prod,login,setlogin}}>
            {children}
        </Appcontext.Provider>
    )
}