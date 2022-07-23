import { Flex,Grid } from '@chakra-ui/react'
import React from 'react'
import styles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
        <Flex>
            <Grid>
              <h1>CONTACT INFO</h1>
              <hr />
              <p>(+91) 7877061041</p>
              <p>support@beautybebo.com</p>
              <p>Open time: 10:00AM - 7:00PM</p>
            </Grid>
             {/* //End of grid */}
            <Grid>
                <h1>CUSTOMER INFO</h1>
              <hr />
              <li>My Account</li>
              <li>Track Order</li>
              <li>Order Return</li>
              <li>Wishlist</li>
              <li>News & Events</li>
              <li>FAQ</li>
            </Grid>
            {/* //End of grid */}
            <Grid>
                <h1>QUICK LINKS</h1>
              <hr />
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Return and Refund Policy</li>
              <li>Shipping Policy</li>
            </Grid>
            {/* //End of grid */}
             <Grid>
                <h1>CATEGORIES</h1>
               <hr />
            <li>Makeup</li>
            <li>Skin</li>
            <li>Hair</li>
            <li>Personal Care</li>
            <li>Mom & Baby Care</li>
            <li>Fragrance</li>
            <li>Ayurveda</li>
            </Grid>
        </Flex>
    </div>
  )
}

export default Footer