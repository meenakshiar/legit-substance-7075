import React from 'react'
import Carousel from '../Components/LandingPage/Carousel';
import Footer from '../Components/LandingPage/Footer';
import { MiniCarousel } from '../Components/LandingPage/MiniCarousel';
import Navbar from '../Components/LandingPage/Navbar';
import Poster from '../Components/LandingPage/Poster';
import QnDetailsContainer from '../Components/LandingPage/QnAContainer';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <MiniCarousel />
            <Poster />
            <Carousel />
            <QnDetailsContainer />
            <Footer />
        </div>
    )
}

export default LandingPage