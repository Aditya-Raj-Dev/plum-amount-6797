import { Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import Loginform from './Loginform'
import Newcustomer from './Newcustomer'

const Login = () => {
  const {login} = useContext(Appcontext)
  return (
    
    <div style={{width:"60%",margin:"auto"}}>
      {
        login ? <Loginform/> : <div>
   <Flex gap="5rem">
        <Loginform/>
      <Newcustomer/>
    </Flex>
    </div>
      } 
    </div>
  )
}

export default Login