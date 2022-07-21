import React from 'react'
import {Input,Flex, Grid, Button} from "@chakra-ui/react"
import styles from "../styles/logsin.module.css"
import { useNavigate } from 'react-router-dom'

const Newcustomer = () => {
  const navigate=useNavigate()
  return (
 
        <div className={styles.newcustomer}>
            <h1>NEW CUSTOMERS</h1>
        <hr />
        <br />
        <br />
        <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
        <br />
        <Button onClick={()=>navigate("/signup")}>CREATE AN ACCOUNT</Button>
        </div>
   
  )
}

export default Newcustomer