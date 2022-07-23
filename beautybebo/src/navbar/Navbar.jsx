import { Flex, Select,Input, Button,Box } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import beautlogo from "../images/beautylogo.jpg"
import { BsSearch,BsSuitHeartFill} from 'react-icons/bs';
import { FaUserAlt} from 'react-icons/fa';
import { GiShoppingBag} from 'react-icons/gi';
import styles from "../styles/home.module.css"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import Login from '../Login-signup/Login';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import { Appcontext } from '../context/Appcontext';
import BaseComponent from 'bootstrap/js/dist/base-component';
import BasicUsage from '../pages/Modalcart';

const Navbar = () => {
  
 const navigate=useNavigate()
 const {login,logindata,total,c} =useContext(Appcontext)
 const [ftotal,setftotal]=useState(total)

  return (
    <div>

      <div name="navbarimg">
        <img src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt="beautybebo offer"  style={{width:"100%"}}/>
      </div>

     <Flex justifyContent="space-around" marginBottom="2rem">
           <div name="logo"  onClick={()=>navigate("/")} style={{hover:"cursor:pointer" }}>
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

              {/* <div className={styles.toplittle}>
                  <div className={styles.little}>
                    <FaUserAlt fontSize="20px"/>
                  </div>
              </div> */}

              <Menu className={styles.loginbutton}>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen}  className={styles.loginbutton} >
      <div className={styles.toplittle}>
                  <div>
                    <FaUserAlt fontSize="20px"/>
                  </div>
              </div>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={()=>navigate("/login")}>Login</MenuItem>
        <MenuItem onClick={()=>navigate("/signup")}>Signup</MenuItem>
      </MenuList>
    </>
  )}
</Menu>





               <div style={{marginTop: '10px'}}>
                 <h2>{login?logindata.fname:"My Account"}</h2>
               </div>
           </Flex>
           
      </Flex>
         
         <div className={styles.pagenav}>
            <Flex justifyContent="space-around" height="100%">
                 <Flex marginBottom="0.2rem" marginTop="0.2rem">
                  <div  onClick={()=>navigate("/makeup")}>
                    <Select  required>
                        <option value="" selected disabled hidden>MAKEUP</option>
                        <option > Face</option>
                        <option >Makeup</option>
                        <option >Foundation</option>
                        <option >Blush</option>
                      </Select>
                   </div>
                      <div onClick={()=>navigate("/skin")}>
                      <Select  required >
                        <option value="" selected disabled hidden>SKIN</option>
                        <option > Face</option>
                        <option >Makeup</option>
                        <option >Foundation</option>
                        <option >Blush</option>
                      </Select>
                      </div>
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
                 <BasicUsage/>
                {/* <Button onClick={()=>navigate("/cart")}
                class={styles.navcartbutton}>{<GiShoppingBag fontSize="22px"/> } <BasicUsage/> ₹ {total}</Button> */}
            </Flex>
         </div>

     
    </div>
  )
}

export default Navbar