import axios from "axios";
import React, { Component, useContext } from 'react'
import { Appcontext } from "../context/Appcontext";

import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';


const Newarrival = () => {
   const {makeupdata}= useContext(Appcontext)

   



   console.log(makeupdata)
  return (
    <div>
        <div>
            <img src="https://www.beautybebo.com/pub/media/blue_heaven.jpg"  />
        </div>
       

    </div>
  )
}

export default Newarrival
