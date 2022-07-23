import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../context/Appcontext'
import { RiDeleteBinLine} from 'react-icons/ri';
import { Box ,Flex,Grid,Button,Heading} from '@chakra-ui/react'
import axios from "axios";
import styles from "../styles/minicart.module.css"
import {Link } from "react-router-dom"
import { GiButter } from 'react-icons/gi';
import {useNavigate,useLocation } from "react-router-dom"

const Minicart = () => {
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
    <div >
{
               cartp.map((item)=>(
                    <div className={styles.box} >
                      <Flex>
                        <img src={item.img}/>
                        <Grid>
                          <p>{item.name}</p>
                  
                          <div >
                              <Flex className={styles.price}>
                                <h3>Price </h3>
                                <h3>-</h3>
                                <h3> ₹{item.price}</h3>
                              </Flex>
                            
                              <h4 >{item.off}</h4>
                        </div>
                        <Flex gap="0.5rem" className={styles.addbtn}>
                        <Button  variant='outline'fontSize="12px" height="20px"
                        colorScheme="red"  width="20px"
                        onClick={()=>updateqty(-1,item.id,item.name,item.img,item.price)}
                        >-</Button>
                        <Heading as='h5' size='sm'>
                          {item.qty}
                          </Heading>
                        <Button colorScheme="red" 
                        variant='outline'fontSize="12px" height="20px" width="20px"
                        onClick={()=>updateqty(1,item.id,item.name,item.img,item.price)}
                        >+</Button>
                        </Flex>
                        <Button className={styles.removebtn} 
                        colorScheme="black" fontSize="12px" height="20px" width="90px"
                        onClick={()=>removeitem(item.id)}
                        >{<RiDeleteBinLine/>}REMOVE ITEM</Button>
                       </Grid>
                       </Flex>
                    </div>
                ))
               }
    </div>
    
    </div>
  )
}

export default Minicart