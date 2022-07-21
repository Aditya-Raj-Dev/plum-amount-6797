import React from 'react'

import {Input,Flex, Grid, Button} from "@chakra-ui/react"
import styles from "../styles/logsin.module.css"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { textAlign } from '@mui/system'
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {useNavigate} from "react-router-dom"

const Loginform = () => {
    const navigate=useNavigate()

  return (
    <div>
         <div  >
      <h1 style={{fontSize:"18px", fontWeight:"bold",marginBottom:"2rem",marginTop:"0.5rem" ,textAlign:"center"}}>CUSTOMER LOGIN</h1>
      <Flex margin="auto"  gap="1rem"justifyContent="center">
      <Button colorScheme='facebook' leftIcon={<FaFacebook />} >
      Log in with Facebook
  </Button>
  <Button colorScheme='red' leftIcon={<FcGoogle />} >Sign in with Google</Button>
      </Flex>
      <br />
      <p style={{color:"grey"}}>--OR--</p>
      <br />
      <div className={styles.loginformcontainer}>
          <Grid>
              <label>Email</label>
              <Input placeholder="Enter your email address"/>
            </Grid>
           
            <Grid>
              <label>Password</label>
              <Input type="password" placeholder='Enter your password'/>
            </Grid>

            <Button>SIGN IN</Button>
      </div>
    </div>
    </div>
  )
}

export default Loginform