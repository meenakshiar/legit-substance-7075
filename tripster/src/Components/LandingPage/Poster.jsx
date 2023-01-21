import React from 'react'
import { Box } from '@chakra-ui/react'



const Poster = () => {
  return (
    <Box p='2%' bg='#f2f2f2;' className='posterContainer'>
        <Box display={'flex'} justifyContent='center' className='posterDiv'>
            <img style={{width:'70%', objectFit:'cover'}} src="https://mmt.servedbyadbutler.com/getad.img/;libID=3713316" alt="" />
        </Box >
    </Box >
  )
}

export default Poster;