// import React, { useEffect, useState } from 'react'
// import { MdKeyboardArrowLeft } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";

// export default function Sliding() {

//     const [images, setImages] = useState([])
//     const [pointer, setPointer] = useState(0)
     

//     let image1="https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg";
//     let image2="https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg";
//     let image3="https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg";

  
//     useEffect(() => {
//       setImages([image1, image2, image3,])
  
//       let interval = setInterval(() => {
//         setPointer(pointer === images.length-1 ? 0 : (prev) => prev + 1);
//       }, 3000);
  
//       return () => clearInterval(interval);
//     }, [pointer])
  
//     const handleForward = () => {
//       if ( pointer === 3 ) {
//         setPointer(0)
//       }
//       else {
//         setPointer(prev => prev + 1)
//       }
//     }
  
//     const handleBackword = () => {
//       if ( pointer === 0 ) {
//         setPointer(images.length-1)
//       }
//       else {
//         setPointer(prev => prev - 1)
//       }
//     }
  
//     return (
//       <div >
//           <img src={images[pointer]} alt="" />
//       </div>
//     )
//   }

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Sliding() {
  return (
    <>
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}