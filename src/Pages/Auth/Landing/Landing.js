import React from 'react'
import Navbar from './Navbar/Navbar'
import { Box1, Box2, Box3 } from './Boxs/Boxs'
import Footer from './Footer/Footer'

function Landing() {
  return (
    <div className=' overflow-hidden'>
        <Navbar />
        <Box1 />
        <Box2 />
        <Box3 />
        <Footer />
    </div>
  )
}

export default Landing