import React from 'react'
import { Flex, Select,Input, Button,Box,Heading, Grid } from '@chakra-ui/react'
import { AiOutlineBars} from 'react-icons/ai';
import { IoIosArrowForward} from 'react-icons/io';
import styles from "../styles/home.module.css"

const Allcateories = () => {
  return (
    <div >
        <Box >
            <Flex gap="1rem" marginBottom="1rem">
            <AiOutlineBars fontSize="17px" fontWeight="bolder"/>
            <Heading as='h5' size='sm'>
                    ALL CATEGORIES
            </Heading>
            </Flex>

         <Grid gap="1rem" className={styles.sidemenu}>
                <Flex gap="5rem">
                <Flex gap="0.3rem">
                    <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" alt="" />
                    <h1>Makeup</h1>
                </Flex>
                <IoIosArrowForward/>
                </Flex>

                <Flex gap="6.3rem">
                    <Flex gap="0.3rem">
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" alt="" />
                        <h1>Skin</h1>
                    </Flex>
                    <IoIosArrowForward/>
                </Flex>
            

                <Flex gap="6.3rem">
                    <Flex gap="0.3rem">
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png" alt="" />
                        <h1>Hair</h1>
                        
                    </Flex>
                    <IoIosArrowForward/>
                </Flex>

                <Flex gap="3.2rem">
                    <Flex gap="0.3rem">
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" alt="" />
                        <h1>Personal Care</h1>
                    </Flex>
                    <IoIosArrowForward/>
                </Flex>

                <Flex gap="1.5rem">
                    <Flex gap="0.3rem">
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png" alt="" />
                        <h1>Mom & baby Care</h1>
                    </Flex>
                    <IoIosArrowForward/>
                </Flex>

                <Flex gap="4.4rem">
                    <Flex gap="0.3rem">
                        <img src="https://www.beautybebo.com/pub/media/fragrance.png" alt="" />
                        <h1>Fragrance</h1>
                    </Flex>
                    <IoIosArrowForward/>
                </Flex>

                
                <Flex gap="7.7rem">
                    <Flex gap="0.3rem">
                        <img src="https://www.beautybebo.com/pub/media/ayurveda.png" alt="" />
                        <h1>Ayurveda</h1>
                    </Flex>
                    <IoIosArrowForward/>
                </Flex>
            </Grid>
        </Box>
    </div>
  )
}

export default Allcateories