import React, { useContext } from 'react'
import { Box ,Flex,Grid,Button} from '@chakra-ui/react'
import { } from '@mui/material'
import styles from "../styles/home.module.css"
import { Center, Square, Circle } from '@chakra-ui/react'
import { GiBeachBag} from 'react-icons/gi';
import { Appcontext } from '../context/Appcontext'

const Homeend = () => {
    const {makeupdata,bestseller,latestproduct,mostviewed,prod,onclickaddcart}= useContext(Appcontext)

    
  return (
    <div  >
        <Flex justifyContent="space-around" gap="2rem" marginBottom="1rem">
            <img src="https://www.beautybebo.com/pub/media/mega-menu/beeone.jpg" style={{height:"220px",width:"485px"}} />
            <img src="https://www.beautybebo.com/pub/media/mega-menu/lotus.jpg" style={{height:"220px",width:"485px"}} />
        </Flex>
        <Flex className={styles.logohome}>
               <div>
                        <Grid>
                        <img src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png" />
                        <p>Makeup</p>
                        </Grid>
               </div>
               <div>
                  <Grid>
                     <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" alt="" />
                     <p>Skin</p>
                  </Grid>
               </div>
                    
                <div>
                    <Grid>
                      <img src="https://www.beautybebo.com/pub/media/catalog/category/hair.png" alt="" />
                      <p>Hair</p>
                    </Grid>
                </div>

                 <div>
                    <Grid>
                      <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" alt="" />
                      <p>Personal Care</p>
                    </Grid>
                 </div> 

                 <div>
                      <Grid>
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png" alt="" />
                        <p>Mom & baby Care</p>
                      </Grid>
                 </div>  
                 <div>
                        <Grid>
                          <img src="https://www.beautybebo.com/pub/media/fragrance.png" alt="" />
                          <p>Fragrance</p>
                        </Grid>
                 </div>
                 <div>
                        <Grid>
                          <img src="https://www.beautybebo.com/pub/media/ayurveda.png" alt="" />
                           <p>Ayurveda</p>
                        </Grid>
                </div>
        </Flex>
        <Box >
             <div className={styles.endproduct}>
               {
                prod.map((item)=>(
                    <div>
                        <img src={item.img} alt="" />
                        <p>{item.name}</p>
                        <div >
                            <s> {item.cost}</s>
                            <h3>₹ {item.price}</h3>
                            <h4 >{item.off}</h4>
                       </div>
                       <Button  onClick={()=>onclickaddcart(item.id,item.name,item.img,item.price)}
                       >{<GiBeachBag/>} {  } Add to cart</Button>
                    </div>
                ))
               }
             </div>
        </Box>
        <div>
            <img src="https://www.beautybebo.com/pub/media/mega-menu/homepage.jpg" alt="" />
        </div>
        <Box marginTop="1rem" display="flex" gap="1rem" className={styles.bestsell}>
          <div>
          <h1>BEST SELLER</h1>
              {
                bestseller.map((item)=>(
                    <div style={{width:"100%"}} className={styles.seller}>
                        <Flex>
                          <img src={item.img} />
                          <div >
                            <p>{item.name}</p>
                            <h5>⭐⭐⭐⭐⭐</h5>
                            <h3>₹ {item.price}</h3>
                            <Button  onClick={()=>onclickaddcart(item.id,item.name,item.img,item.price)}
                            >{<GiBeachBag/>} {  } Add to cart</Button>
                          </div>
                        </Flex>
                    </div>
                ))
              }
          </div>
          <div>
          <h1>LATEST PRODUCT</h1>
          {
                latestproduct.map((item)=>(
                    <div style={{width:"100%"}} className={styles.seller}>
                        <Flex>
                          <img src={item.img} />
                          <div >
                            <p>{item.name}</p>
                            <h5>⭐⭐⭐⭐⭐</h5>
                            <h3>₹ {item.price}</h3>
                            <Button  onClick={()=>onclickaddcart(item.id,item.name,item.img,item.price)}
                            >{<GiBeachBag/>} {  } Add to cart</Button>
                          </div>
                        </Flex>
                    </div>
                ))
              }
          </div>
          <div>
          <h1>MOST VIEWED</h1>
          {
                mostviewed.map((item)=>(
                    <div style={{width:"100%"}} className={styles.seller}>
                        <Flex>
                          <img src={item.img} />
                          <div >
                            <p>{item.name}</p>
                            <h5>⭐⭐⭐⭐⭐</h5>
                            <h3>₹ {item.price}</h3>
                            <Button  onClick={()=>onclickaddcart(item.id,item.name,item.img,item.price)}
                            >{<GiBeachBag/>} {  } Add to cart</Button>
                          </div>
                        </Flex>
                    </div>
                ))
              }
          </div>

        </Box>
        <Box>
            <img src="https://www.beautybebo.com/pub/media/mega-menu/offer.gif" alt="" />
        </Box>
        <h1 style={{fontSize:"23px", fontWeight:"bold",marginBottom:"2rem",textAlign:"left",marginTop:"1rem"}}>Welcome to Beauty Products Online Shopping India- Beauty Bebo</h1>
        <div style={{color:"grey"}}>
If you are looking for a flawless radiant face outlook for a special occasion, then we have the perfect tips for you. As you must already know, the conspicuous flawless outlook you want for your wedding, a date, a dinner party or for a modelling competition is only achieved through makeup.

Don’t get me wrong, you are naturally beautiful, that’s obvious. But everyone else is, so how will you will you ensure that you are different? Read on for hot irresistible tips before you buy beauty products online!

Clean Your Face First!

Before embarking on any makeup, always ensure that your face is clean. Need some assistance in absolute cleaning? Visit our range of face wash beauty products online for your best pick. We have made it our duty to carefully select the best products for you, so that you don’t experience breaks and allergies after use. So now you can be confident that your buy cosmetic online shopping will be worth your time and effort.

Wondering then how you will make a choice among the spectrum available? Most of our products are purely natural in ingredient, so you can as well check for your favorite ingredient combination. If not sure, we are still here for you. We can help narrow down your options, together with you.

Apply a Moisturizer
        </div>
    </div>
  )
}

export default Homeend