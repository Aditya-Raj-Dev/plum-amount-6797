import React from 'react'
import {Input,Flex, Grid, Button} from "@chakra-ui/react"
import styles from "../styles/logsin.module.css"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { textAlign } from '@mui/system'
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
const Resister = () => {
  return (
    <div  className={styles.singbox} >
      <h1 style={{fontSize:"18px", fontWeight:"bold",marginBottom:"2rem",marginTop:"0.5rem" ,textAlign:"center"}}>CREATE NEW CUSTOMER ACCOUNT</h1>
      <Flex margin="auto" width="40%" gap="1rem"justifyContent="center">
      <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
      Log in with Facebook
  </Button>
  <Button colorScheme='red' leftIcon={<FcGoogle />} >Sign in with Google</Button>
      </Flex>
      <br />
      <p style={{color:"grey"}}>--OR--</p>
      <br />
      <div className={styles.container}>
        <Flex gap="1rem" textAlign="left">
            <Grid>
              <label> First Name</label>
              <Input placeholder='Enter your first name'/>
            </Grid>
            <Grid>
              <label>Last Name</label>
              <Input placeholder='Enter your last name'/>
            </Grid>
        </Flex>
        
        <Flex>
        <Checkbox isInvalid>Sign Up for Newsletter</Checkbox>
        </Flex>
      
          <Grid>
              <label>Email</label>
              <Input placeholder="Enter your email address"/>
            </Grid>
            <Grid>
              <label>Phone</label>
              <Input placeholder='Enter your phone number'/>
            </Grid>
            <Grid>
              <label>Password</label>
              <Input type="password" placeholder='Enter your password'/>
            </Grid>
            <Grid>
              <label>Confirm Password</label>
              <Input placeholder='Confirm your password'/>
            </Grid>

            <Button>CREATE AN ACCOUNT</Button>
      </div>
    </div>
  )
}

export default Resister
