import React, { useContext } from 'react'
import {Input,Flex, Grid, Button} from "@chakra-ui/react"
import styles from "../styles/logsin.module.css"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { textAlign } from '@mui/system'
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import { Appcontext } from '../context/Appcontext'

const Shipping = () => {
  function fillsignupdata(){

  }
    
  return (
    <div  className={styles.singbox} >
      <h1 style={{fontSize:"18px", fontWeight:"bold",marginBottom:"0.5rem",marginTop:"0.5rem" ,textAlign:"center"}}>Shipping Address</h1>
      {/* <Flex margin="auto" width="40%" gap="1rem"justifyContent="center">
      <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
      Log in with Facebook
  </Button>
  <Button colorScheme='red' leftIcon={<FcGoogle />} >Sign in with Google</Button>
      </Flex>
      <br />
      <p style={{color:"grey"}}>--OR--</p> */}
      <br />
      <div className={styles.container}>
        <Flex gap="1rem" textAlign="left">
            <Grid>
              <label> First Name</label>
              <Input placeholder='Enter your first name' name="fname" onChange={fillsignupdata}/>
            </Grid>
            <Grid>
              <label>Last Name</label>
              <Input placeholder='Enter your last name' name="lname"onChange={fillsignupdata}/>
            </Grid>
        </Flex>
        <Grid>
              <label>Email</label>
              <Input placeholder="Enter your email address" name="email"onChange={fillsignupdata}/>
            </Grid>
        
          <Grid>
              <label>Street Address</label>
              <Input placeholder="Enter your Street Address" name="email"onChange={fillsignupdata}/>
            </Grid>
            <Grid>
              <label>City</label>
              <Input placeholder='Enter your city'name="city"onChange={fillsignupdata}/>
            </Grid>
            <Grid>
              <label>State</label>
              <Input placeholder='Enter your State'name="state"onChange={fillsignupdata}/>
            </Grid>
            <Grid>
              <label>Postal code</label>
              <Input type="text" placeholder='Enter your code' name="pass"onChange={fillsignupdata}/>
            </Grid>
            <Grid>
              <label>Country</label>
              <Input type="text" placeholder='Enter your country' name="country"onChange={fillsignupdata}/>
            </Grid>

            <Grid>
              <label>Phone Number</label>
              <Input placeholder='Enter phone number' onChange={fillsignupdata}/>
            </Grid>

            <Button onClick={()=>{}}>Proceed To Checkout</Button>
      </div>
    </div>
  )
}

export default Shipping