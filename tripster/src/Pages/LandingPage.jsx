import { Box } from '@chakra-ui/react';
import React from 'react'
import Carousel from '../Components/LandingPage/Carousel';
import FlightSearch from '../Components/LandingPage/FlightSearch';
import Footer from '../Components/LandingPage/Footer';
import { MiniCarousel } from '../Components/LandingPage/MiniCarousel';
import Navbar from '../Components/LandingPage/Navbar';
import Poster from '../Components/LandingPage/Poster';
import QnDetailsContainer from '../Components/LandingPage/QnAContainer';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Box p={4} h='520px' bg='linear-gradient(#061526, #144073)'>
                <FlightSearch />
            </Box>
            <MiniCarousel />
            <Poster />
            <Carousel />
            <QnDetailsContainer />
            <Footer />
        </div>
    )
}

export default LandingPage