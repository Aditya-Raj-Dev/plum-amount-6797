import { Flex ,Grid,Box,Button,Input} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Appcontext } from '../context/Appcontext'
import styles from "../styles/checkout.module.css"
import { useNavigate } from 'react-router-dom'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const Checkout = () => {
  const {total,carttotal}=useContext(Appcontext)
  const navigate=useNavigate()
  const [val,setval]=useState(null)
  const [otp,setotp]=useState(false)

  function final(){
    if(val===3){
      return navigate("/payment")
    }
    else if(val===2){
      setotp(!otp)
      setTimeout(()=>{
        navigate("/order")
      },3000)
     
    }
    else{
      navigate("/order")
    }
  }
  return (
    <div style={{width:"70%",margin:"auto",marginTop:"2rem"}}>
      {
        otp?<Alert status='success'>
        <AlertIcon />
        OTP Sent To your Mobile Number
      </Alert>:null
      }
      <Flex justifyContent="space-between" >
         <Grid>
                <h1 style={{fontSize:"18px",fontWeight:"bold"}}>
                PAYMENT METHOD</h1>
                <br/>
                <br />
                <RadioGroup defaultValue='1'>
                  <Grid spacing={4} direction='row'>
                    <Radio value='1'   onClick={()=>setval(1)}
                     >Cash On Delivery</Radio>
                    <br />
                    <hr />
                    <br/>
                    <Radio value='2' onClick={()=>setval(2)}>Pay By UPI</Radio>
                    <br />
                    {
                      val===2? <Input type="text" placeholder='Enter your UPI Number'/> :null
                    }
                    <br />
                    <hr />
                    <br />
                    <Radio value='3' onClick={()=>setval(3)}
                    >Debit/Credit Card/Net banking/Wallet - PayUmoney</Radio>
                  </Grid>
                </RadioGroup>
         </Grid>

         <Grid>
             <Box className={styles.box}>
                 <h1 style={{fontSize:"18px",fontWeight:"bold"}}
                 >ORDER SUMMARY</h1>
                  <br />
                  <hr />
                
                  <Flex >
                    <p>Cart Subtotal</p>
                    <p> ₹{total}.00</p>
                  </Flex>
                  <hr />
                  <hr />
                  <Flex>
                    <p>shipping</p>
                    <p> ₹55.00</p>
                  </Flex>
                  <hr />
                  <Flex>
                    <p>GST</p>
                    <p> ₹74.00</p>
                  </Flex>
                  <hr />
                  <Flex>
                    <p>Order Total </p>
                    <p> ₹{74+55+total}.00</p>
                  </Flex>
                  <hr />
                  <Flex>
                    <p>Total Item </p>
                    <p>{carttotal} </p>
                  </Flex>
                  <hr />
                
             </Box>
         </Grid>
      </Flex>
      <Button
      margin="2rem"
  size='lg'
  height='48px'
  width='200px'
  border='2px'
  borderColor='black.500'
     onClick={()=>final()}
      > Place Order</Button>
    </div>
  )
}

export default Checkout