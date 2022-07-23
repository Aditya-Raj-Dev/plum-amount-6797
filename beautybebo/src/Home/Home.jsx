import React from 'react'
import Allcateories from './Allcateories'
import Newarrival from './Newarrival'
import Slideshow from './Sliding'
import Sliding from './Sliding'
import { Flex} from '@chakra-ui/react'
import Homeend from './Homeend'
import styles from "../styles/home.module.css"

const Home = () => {
  return (
    <div >
        
        <div className={styles.container}>
        <Flex gap="4rem" justifyContent="space-around" marginTop="1.5rem" >
          <Allcateories/>
          <Sliding/> 
        </Flex>
      <Newarrival/>
      <Homeend/>
      </div>
    </div>
  )
}

export default Home