import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../context/Appcontext'
import { RiDeleteBinLine} from 'react-icons/ri';
import { Box ,Flex,Grid,Button,Heading} from '@chakra-ui/react'
import axios from "axios";
import styles from "../styles/cart.module.css"
import {Link } from "react-router-dom"
import { GiButter } from 'react-icons/gi';
import {useNavigate,useLocation } from "react-router-dom"
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const Cartpage = () => {
  const [remove,setremove]=useState(false)
   const [cartp,setcartp]= useState([])
    const {c,setc,login}=useContext(Appcontext)
    const navigate=useNavigate()
    

   function getdata(){
    axios.get(`https://beautybeboplumamount.herokuapp.com/cart`)
    .then((res)=>{
     const data= res.data.filter((item)=>item.qty !== 0)
       setcartp(data)
    })
    
   }
   
   async function removeitem(id){
   await axios({
      url:`https://beautybeboplumamount.herokuapp.com/cart/${id}`,
      method: 'DELETE',
    })
    setremove(!remove)
    setc(!c)
   }

   async function updateqty(num,id,name,img,price,qty){
       if(qty===1 && num=== -1){
        console.log(qty)
        console.log(num)
        removeitem(id)
        return
       }
   await axios({
      url:`https://beautybeboplumamount.herokuapp.com/cart/${id}`,
      method: 'PATCH',
      data:{
              id:id,
               name:name,
               img:img,
               price:price,
               qty:qty+num,
      }
    }).then((res)=>{
      setc(!c)
    })
    
   }
   useEffect(()=>{
    getdata()
   },[remove,c])
  
  return (
    <div>
      <Flex marginTop="0.5rem" marginRight="4rem" marginLeft="4rem">
     <Link to="/"> <Button  colorScheme="red"
     >GO TO HOME</Button></Link>
        <div style={{width: '50%', justifyContent:"space-between", margin:"auto",display: "flex",marginBottom:"1rem",marginTop:"1rem"}}>
                
            <h1 style={{fontWeight: "bolder", fontSize: "20px" ,textAlign: "center",marginBottom: "10px",margin:"auto"}}>CART PAGE</h1>
            
        </div>
        <Button onClick={()=>{navigate("/Shipping")
          if(!login)
        alert("Please Signup First")
    }}
    colorScheme="pink">Proceed To Buy</Button>
        </Flex>
    <div className={styles.cartcontainer}>
{
               cartp.map((item)=>(
                    <Box className={styles.cartbox} >
                        <img src={item.img}/>
                        <p>{item.name}</p>
                        <h5> ⭐⭐⭐⭐⭐</h5>
                        <div >
                            <Flex className={styles.price}>
                              <h3>Price </h3>
                              <h3>-</h3>
                              <h3> ₹{item.price}</h3>
                            </Flex>
                           
                            <h4 >{item.off}</h4>
                       </div>
                       <Flex gap="0.5rem" className={styles.addbtn}>
                       <Button  variant='outline'
                       onClick={()=>updateqty(-1,item.id,item.name,item.img,item.price,item.qty)}
                       >-</Button>
                       <Heading as='h5' size='sm' marginTop='0.6rem'>
                        {item.qty}
                        </Heading>
                       <Button  variant='outline'
                       onClick={()=>updateqty(1,item.id,item.name,item.img,item.price,item.qty)}
                       >+</Button>
                       </Flex>
                       <Button className={styles.removebtn}
                       colorScheme="darkred"
                       onClick={()=>removeitem(item.id)}
                       >{<RiDeleteBinLine/>}REMOVE ITEM</Button>
                       
                    </Box>
                ))
               }
    </div>
    
    </div>
  )
}

export default Cartpage