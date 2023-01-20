import React from 'react'
import { WrapItem, Center, Wrap } from '@chakra-ui/react'
import { SiTwitter } from 'react-icons/si';
import { RiFacebookFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <>
            <Wrap justify='space-between' bg='black' w='auto' h={'200px'} p='50px 150px'>
                <WrapItem>
                    <Center w='180px' h='80px' color='white' gap={'30px'} fontSize="35px">
                        <a href="https://twitter.com/makemytrip/"><SiTwitter /></a>
                        <a href="https://www.facebook.com/makemytrip/"><RiFacebookFill /></a>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w='280px' h='100px' color='white' fontSize="16px" >
                        <p>© 2022 MAKEMYTRIP PVT. LTD.
                            Country India USA UAE
                        </p>
                    </Center>
                </WrapItem>
            </Wrap>
        </>
    )
}

export default Footer