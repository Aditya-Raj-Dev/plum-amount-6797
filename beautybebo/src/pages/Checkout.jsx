import { Flex ,Grid,Box,Button} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Appcontext } from '../context/Appcontext'
import styles from "../styles/checkout.module.css"

const Checkout = () => {
  const {total,carttotal}=useContext(Appcontext)
  return (
    <div style={{width:"70%",margin:"auto",marginTop:"2rem"}}>
      <Flex justifyContent="space-between" >
         <Grid>
                <h1 style={{fontSize:"18px",fontWeight:"bold"}}>
                PAYMENT METHOD</h1>
                <br/>
                <br />
                <RadioGroup defaultValue='1'>
                  <Grid spacing={4} direction='row'>
                  
                    <Radio value='1' >Cash On Delivery</Radio>
                    <br />
                    <hr />
                    <br/>
                    <Radio value='2'>Pay By UPI</Radio>
                    <br />
                    <hr />
                    <br />
                    <Radio value='3'>Debit/Credit Card/Net banking/Wallet - PayUmoney</Radio>
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

      > Proceed To Pay</Button>
    </div>
  )
}

export default Checkout