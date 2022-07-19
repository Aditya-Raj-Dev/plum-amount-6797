import { Flex, Select,Input, Button } from '@chakra-ui/react'
import React from 'react'
import beautlogo from "../images/beautylogo.jpg"
import { BsSearch,BsSuitHeartFill} from 'react-icons/bs';
import { FaUserAlt} from 'react-icons/fa';
import styles from "../styles/home.module.css"

const Navbar = () => {
  return (
    <div>

      <div name="navbarimg">
        <img src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt="beautybebo offer"  style={{width:"100%"}}/>
      </div>

     <Flex justifyContent="space-around" marginBottom="2rem">
           <div name="logo">
            <img src={beautlogo} alt="gfdvb" style={{height:"60%"}}/>
           </div>

             <Flex marginTop="1.5rem">
                <div>
                  <Select width="13rem">
                    <option value="">All categories</option>
                    <option > Face</option>
                    <option >Makeup</option>
                    <option >Foundation</option>
                    <option>Blush</option>
                  </Select>
                </div>
                <div>
                  <Input placeholder="Enter your Search..."/>
                </div>
                <div>
                  <Button colorScheme='pink' borderRadius="0px"><BsSearch/></Button>
                </div>
           </Flex>
           <Flex marginTop="1.5rem">
              <div className={styles.toplittle}>
                  <div className={styles.little}>
                    <BsSuitHeartFill fontSize="20px"/>
                  </div>
              </div>

              <div className={styles.toplittle}>
                  <div className={styles.little}>
                    <FaUserAlt fontSize="20px"/>
                  </div>
              </div>
               <div style={{marginTop: '10px'}}>
                 <h2>My Account</h2>
               </div>
           </Flex>
           
      </Flex>
         
         <div className={styles.pagenav}>
            <Flex justifyContent="space-around">
                 <Flex>
                    <Select  required>
                        <option value="" selected disabled hidden>MAKEUP</option>
                        <option > Face</option>
                        <option >Makeup</option>
                        <option >Foundation</option>
                        <option >Blush</option>
                      </Select>
                      <Select required>
                        <option value="" selected disabled hidden>SKIN</option>
                        <option > Face</option>
                        <option >Makeup</option>
                        <option >Foundation</option>
                        <option >Blush</option>
                      </Select>
                      <Select required>
                        <option value=""selected disabled hidden>HAIR</option>
                        <option > Face</option>
                        <option >Makeup</option>
                        <option >Foundation</option>
                        <option >Blush</option>
                      </Select>
                      <Select required>
                        <option value=""selected disabled hidden>PERSONAL CARE</option>
                        <option> Face</option>
                        <option>Makeup</option>
                        <option>Foundation</option>
                        <option>Blush</option>
                      </Select>
                      <Select required>
                        <option value=""selected disabled hidden>MOM & BABY CARE</option>
                        <option > Face</option>
                        <option >Makeup</option>
                        <option >Foundation</option>
                        <option >Blush</option>
                      </Select>
                      <Select required>
                        <option value="" selected disabled hidden>FRAGRANCE</option>
                        <option > Face</option>
                        <option >Makeup</option>
                        <option >Foundation</option>
                        <option >Blush</option>
                      </Select>
                      <Select  required>
                        <option value=""selected disabled hidden>AYURVEDA</option>
                        <option> Face</option>
                        <option>Makeup</option>
                        <option>Foundation</option>
                        <option>Blush</option>
                      </Select>
                      <Select required >
                        <option value=""selected disabled hidden> Face</option>
                        <option >Makeup</option>
                        <option >Foundation</option>
                        <option >Blush</option>
                      </Select>
                 </Flex>

                 <Button>MY CART</Button>
            </Flex>
         </div>

     
    </div>
  )
}

export default Navbar