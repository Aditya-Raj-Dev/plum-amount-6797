import React from 'react'
import { Flex, Select,Input, Button,Box,Heading, Grid } from '@chakra-ui/react'
import { AiOutlineBars} from 'react-icons/ai';
import { IoIosArrowForward} from 'react-icons/io';
import styles from "../styles/home.module.css"
import {useNavigate} from "react-router-dom"

const Allcateories = () => {
    const navigate=useNavigate()
  return (
    <div >
        <Box width="100%">
            <Flex gap="1rem" marginBottom="1rem">
            <AiOutlineBars fontSize="17px" fontWeight="bolder"/>
            <Heading as='h5' size='sm'>
                    ALL CATEGORIES
            </Heading>
            </Flex>

         <Grid gap="1rem" className={styles.sidemenu}  >
                <Flex gap="6.4rem" onClick={()=>navigate("/makeup")}>
                <Flex gap="0.3rem">
                    <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" alt="" />
                    <h1>Makeup</h1>
                </Flex>
                <IoIosArrowForward/>
                </Flex>

                <Flex gap="7.7rem"  onClick={()=>navigate("/skin")}>
                    <Flex gap="0.3rem" >
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" alt="" />
                        <h1>Skin</h1>
                    </Flex>
                    <IoIosArrowForward/>
                </Flex>
            

                <Flex gap="7.9rem">
                    <Flex gap="0.3rem">
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png" alt="" />
                        <h1>Hair</h1>
                        
                    </Flex>
                    <IoIosArrowForward/>
                </Flex>

                <Flex gap="4.5rem">
                    <Flex gap="0.3rem">
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" alt="" />
                        <h1>Personal Care</h1>
                    </Flex>
                    <IoIosArrowForward/>
                </Flex>

                <Flex gap="2.9rem">
                    <Flex gap="0.3rem">
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png" alt="" />
                        <h1>Mom & baby Care</h1>
                    </Flex>
                    <IoIosArrowForward/>
                </Flex>

                <Flex gap="6.6rem">
                    <Flex gap="0.3rem">
                        <img src="https://www.beautybebo.com/pub/media/fragrance.png" alt="" />
                        <h1>Fragrance</h1>
                    </Flex>
                    <IoIosArrowForward/>
                </Flex>

                
                <Flex >
                    <Flex gap="7rem" >
                    <Flex gap="0.3rem">
                        <img src="https://www.beautybebo.com/pub/media/ayurveda.png" alt="" />
                        <h1>Ayurveda</h1>
                    </Flex>
                    <IoIosArrowForward/>
                    </Flex>
                </Flex>
            </Grid>
        </Box>
    </div>
  )
}

export default Allcateories