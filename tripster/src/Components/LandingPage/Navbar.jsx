import React, { useContext } from 'react'
import logo from '../../images/tripsterLogoWbg.png'
import { Context } from '../../Context/ContextProvider';
import '../../CSS/Navbar.css'
import { Navigate, useNavigate } from 'react-router-dom';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FlightSearch from './FlightSearch';
import { Link as LinkPage } from 'react-router-dom'

const Links = [
  {
    'icon': <FlightIcon />,
    'label': 'Flights'
  },
  {
    'icon': <HotelIcon />,
    'label': 'Hotels'
  },
  {
    'icon': <HomeWorkIcon />,
    'label': 'Homestays'
  },
  {
    'icon': <FlightIcon />,
    'label': 'Holiday Packages'
  },
  {
    'icon': <TrainIcon />,
    'label': 'Trains'
  },
  {
    'icon': <DirectionsBusFilledIcon />,
    'label': 'Buses'
  },
  {
    'icon': <LocalTaxiIcon />,
    'label': 'Cabs'
  },
  {
    'icon': <DownhillSkiingIcon />,
    'label': 'Activities'
  },
]

const NavLink = ({ children }) => (

  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue(),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth, setIsAuth } = useContext(Context);
  // console.log(isAuth);
  const navigateTo = useNavigate();

  return (
    <>
      <Box bg={useColorModeValue('#061526')} px={4} >
        <Flex h={20} alignItems={'center'} justifyContent={'space-evenly'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={2} alignItems={'center'} fontSize='15px' >
            <Box>
              <Link to='/'>
              <img src={logo} style={{ width: '180px' }} alt="logo" />
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={20}
              display={{ base: 'none', md: 'flex' }}
              color='white'>
              {Links.map((link, i) => (
                <NavLink key={i + 1}>
                  <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                    {link.icon}
                  </div> {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                {
                  isAuth ?
                    <Avatar
                      size={'sm'}
                      src=
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    />
                    :
                    ''
                }
              </MenuButton>
              {
                isAuth ?
                  <MenuList>
                    <MenuItem>My Profile</MenuItem>
                    <MenuItem>My Trips </MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={() => {
                      setIsAuth(false)
                      if (isAuth===false){
                        <Navigate to='/' />
                      }
                    }}>
                        
                        Logout</MenuItem>
                  </MenuList>
                  :
                  <Button
                    // colorScheme="linear-gradient(to right, #50aefe, #0c61f4)"
                    _hover={{
                      background: 'linear-gradient(to right, #90aefe, #0e61f9)',
                      color: 'white',
                    }}
                    // colorScheme='linear-gradient(93deg,#53b2fe,#065af3)' 
                    background='linear-gradient(to right, #50aefe, #0c61f4)'
                    color='white'
                    margin='0 20px'
                    padding='10px 30px'
                  // _hover='linear-gradient(to right, #50aefe, red)'
                  >
                    <LinkPage to='/login'>
                      Login or Create Account
                    </LinkPage>
                  </Button>
              }
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}