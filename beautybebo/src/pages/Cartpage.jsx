import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../context/Appcontext'
import { RiDeleteBinLine} from 'react-icons/ri';
import { Box ,Flex,Grid,Button,Heading} from '@chakra-ui/react'
import axios from "axios";
import styles from "../styles/cart.module.css"
import {Link } from "react-router-dom"
import { GiButter } from 'react-icons/gi';
import {useNavigate,useLocation } from "react-router-dom"

const Cartpage = () => {
  const [remove,setremove]=useState(false)
   const [cartp,setcartp]= useState([])
    const {c,setc,login}=useContext(Appcontext)
    const navigate=useNavigate()
    

   function getdata(){
    axios.get(` http://localhost:8080/cart`)
    .then((res)=>{
       setcartp(res.data)
    })
    
   }
   
   function removeitem(id){
    console.log("jhkfd")
    axios({
      url:` http://localhost:8080/cart/${id}`,
      method: 'DELETE',
    })
    setremove(!remove)
    setc(!c)
   }

   function updateqty(num,id,name,img,price,qty){
    qty=Number(qty)
    console.log(typeof(qty))
    axios({
      url:` http://localhost:8080/cart/${id}`,
      method: 'PUT',
      data:{
              id:id,
               name:name,
               img:img,
               price:price,
               qty:qty++,
        
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
                    <div className={styles.cartbox}>
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
                       onClick={()=>updateqty(-1,item.id,item.name,item.img,item.price)}
                       >-</Button>
                       <Heading as='h5' size='sm' marginTop='0.6rem'>
                        {item.qty}
                        </Heading>
                       <Button  variant='outline'
                       onClick={()=>updateqty(1,item.id,item.name,item.img,item.price)}
                       >+</Button>
                       </Flex>
                       <Button className={styles.removebtn}
                       colorScheme="darkred"
                       onClick={()=>removeitem(item.id)}
                       >{<RiDeleteBinLine/>}REMOVE ITEM</Button>
                       
                    </div>
                ))
               }
    </div>
    
    </div>
  )
}

export default Cartpage