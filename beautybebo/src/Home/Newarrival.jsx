import axios from "axios";
import React, { Component, useContext } from 'react'
import { Appcontext } from "../context/Appcontext";
import styles from "../styles/home.module.css"
import { Box ,Flex,Grid,Button} from '@chakra-ui/react'
import { GiBeachBag} from 'react-icons/gi';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";


// import required modules
import { FreeMode, Pagination } from "swiper";


const Newarrival = () => {
   const {makeupdata,onclickaddcart}= useContext(Appcontext)

  return (
    <div>
        <div>
            <img src="https://www.beautybebo.com/pub/media/blue_heaven.jpg" style={{marginBottom:"2rem"}} />
        </div>
       <div>
       <h1>NEW ARRIVALS</h1>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       
               {
                
               makeupdata.map((item)=>(
                    <div className={styles.startproduct}>
                      <SwiperSlide>
                        <img src={item.img}/>
                        <p>{item.name}</p>
                        <h5>⭐⭐⭐⭐⭐</h5>
                        <div >
                            <s>₹ {item.cost}</s>
                            <h3>₹ {item.price}</h3>
                            <h4 >{item.off}</h4>
                       </div>
                       <Button onClick={()=>onclickaddcart(item.id,item.name,item.img,item.price)}
                       >{<GiBeachBag/>} Add to cart</Button>
                       </SwiperSlide>
                    </div>
                ))
               }
            
      </Swiper>
       </div>
       
    </div>
  )
}

export default Newarrival
