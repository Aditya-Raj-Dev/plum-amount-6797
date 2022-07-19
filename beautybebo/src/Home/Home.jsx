import React from 'react'
import Allcateories from './Allcateories'
import Homeproduct from './Homeproduct'
import Navbar from './Navbar'
import Slideshow from './Sliding'
import Sliding from './Sliding'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Allcateories/>
         <Homeproduct/>
    </div>
  )
}

export default Home