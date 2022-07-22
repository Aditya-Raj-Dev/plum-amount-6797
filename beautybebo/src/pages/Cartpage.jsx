import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../context/Appcontext'
import { RiDeleteBinLine} from 'react-icons/ri';
import { Box ,Flex,Grid,Button,Heading} from '@chakra-ui/react'
import axios from "axios";
import styles from "../styles/page.module.css"
import {Link } from "react-router-dom"
import { GiButter } from 'react-icons/gi';

const Cartpage = () => {
  const [remove,setremove]=useState(false)
   const [cartp,setcartp]= useState([])

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
   }
   useEffect(()=>{
    getdata()
   },[remove])
  
  return (
    <div>
      <Flex>
     <Link to="/"> <Button>GO TO HOME</Button></Link>
        <div style={{width: '50%', justifyContent:"space-between", margin:"auto",display: "flex",marginBottom:"1rem",marginTop:"1rem"}}>
                
            <h1 style={{fontWeight: "bolder", fontSize: "20px" ,textAlign: "center",marginBottom: "10px",margin:"auto"}}>CART PAGE</h1>
            
        </div>
        </Flex>
    <div className={styles.cartcontainer}>
       
        
{
                
               cartp.map((item)=>(
                    <div className={styles.cartbox}>
                        <img src={item.img}/>
                        <p>{item.name}</p>
                        <h5>⭐⭐⭐⭐⭐</h5>
                        <div >
                            
                            <h3>₹ {item.price}</h3>
                            <h4 >{item.off}</h4>
                       </div>
                       <Flex gap="0.5rem">
                       <Button>-</Button>
                       <Heading as='h5' size='sm' marginTop='0.6rem'>
                          0
                        </Heading>
                       <Button>+</Button>
                       </Flex>
                       <Button onClick={()=>removeitem(item.id)}
                       >{<RiDeleteBinLine/>}REMOVE ITEM</Button>
                       
                    </div>
                ))
               }
    </div>
    </div>
  )
}

export default Cartpage