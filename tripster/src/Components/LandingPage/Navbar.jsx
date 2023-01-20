import React from 'react'
import logo from '../images/tripsterLogoWbg.png'
import ocean from '../images/oceanVideo.mp4'
import { AspectRatio } from '@chakra-ui/react'


const Navbar = () => {
  return (
    <>
      <div className='navContainer' >
        <img src={logo} style={{ width: '180px' }} alt="logo" />
      </div>

      {/* <AspectRatio maxW='100%' ratio={6 / 2}>
        <video
          src={ocean}
          allowFullScreen
          muted
          autoPlay
          loop
        />
      </AspectRatio> */}
    </>
  )
}

export default Navbar