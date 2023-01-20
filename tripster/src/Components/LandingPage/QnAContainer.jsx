import React from 'react'
import { Box, Heading, Grid } from '@chakra-ui/react'
import styles from '../../CSS/FooterAndQnA.css'

const QnDetailsContainer = () => {
    return (
        <>
            <Grid
                className='DetailsContainer'
                style={styles}
                fontSize={{ base: '10px', md: '10px', lg: '14px' }}
                gap='4'>
                <Box>
                    <Heading as={'h2'} size='xs'>PRODUCT OFFERING</Heading>
                    <p>Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Gift Cards, Trip Money, Trip Ideas, Travel Blog, PNR Status, Tripster Advertising Solutions, One Way Cab</p>
                </Box>
                <Box>
                    <Heading as={'h2'} size='xs'>Tripster</Heading>
                    <p>About Us, Investor Relations, Careers, MMT Foundation, CSR Policy, myPartner - Travel Agent Portal, Foreign Exchange, List your hotel, Partners- Redbus, Partners- Goibibo, Advertise with Us</p>
                </Box>
                <Box>
                    <Heading as={'h2'} size='xs'>ABOUT THE SITE</Heading>
                    <p>Customer Support, Payment Security, Privacy Policy, User Agreement, Terms of Service, More Offices, Make A Payment, Work From Home</p>
                </Box>
                <Box>
                    <Heading as={'h2'} size='xs'>TOP HOTELS IN INDIA</Heading>
                    <p>Fairmont Jaipur, St Regis Goa, Six Senses Fort Barwara, W Goa, Grand Hyatt Goa, Shangri-La Bangalore, The St Regis Mumbai, Taj Rishikesh, Grand Hyatt Mumbai, Le Meridien Delhi, Rambagh Palace Jaipur, Leela Palace Chennai, The Leela Palace Udaipur, Taj Lake Palace Udaipur, Jw Marriott Chandigarh, Alila Diwa Goa, Le Meridien Goa, Taj Lands End Mumbai, Itc Grand Chola Chennai, Itc Maratha Mumbai, Oberoi Udaivilas, Jai Mahal Palace Jaipur, Taj Mahal Tower Mumbai, Marriott Suites Pune, Park Hyatt Chennai, The Leela Palace Jaipur, Jw Marriott Mumbai Sahar, Jw Marriott Mumbai Juhu, The Ritz Carlton Bengaluru, The Oberoi New Delhi, Taj Resort & Convention Centre Goa, Taj Bengal Kolkata, Taj Coromandel Chennai, The Oberoi Gurgaon, The Westin Goa, Jw Marriott Hotel Pune, The Leela Palace New Delhi, Taj West End Bengaluru, The Taj Mahal Palace Mumbai
                        TOP INTERNATIONAL HOTELS</p>
                </Box>
                <Box>
                    <Heading as={'h2'} size='xs'>CORPORATE TRAVEL</Heading>
                    <p>Corporate Travel, Corporate Hotel Booking, Corporate Flight Booking, Business Travel for SME, GST Invoice for International flights, Business Travel Solutions, GST Invoice for Bus, Corporate Bus booking, myBiz - Best Business Travel Platform, GST Invoice for Flights, GST Invoice for Corporate Travel, GST Invoice for Hotels, myBiz for Small Business, Free cancellation on International Flights</p>
                </Box>

            </Grid>
            {/*  */}

            <Grid
                className='QnAContainer'
                style={styles}
                id='aboutWebsite'
                w='100%' h={'auto'}
                justify='space-around'
                align='center'
                color='black'
                gap='5'
                fontSize={{ base: '10px', md: '10px', lg: '14px' }}
                templateColumns={{ md: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
                textAlign={'left'} p={{ lg: '50, 150', md: '0' }}>
                <Box w={'auto'} >
                    <Heading as={'h2'} size='md' p={'20px 0'}>Why Tripster?</Heading >
                    <p>Established in 2000, Tripster has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. </p>
                </Box>
                <Box w={'auto'} >
                    <Heading as={'h2'} size='md' p={'20px 0'}>Booking Flights with Tripster</Heading>
                    <p>At Tripster, you can find the best of deals and cheap air tickets to any place you want by booking your tickets on our website or app. Being India’s leading website for hotel, flight, and holiday bookings, Tripster helps you book flight tickets that are affordable and customized to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to cater to our customer’s queries and concerns.</p>
                </Box>
                <Box w={'auto'} t='0'>
                    <Heading as={'h2'} size='md' p={'20px 0'}>Domestic Flights with Tripster</Heading>
                    <p>Tripster is India's leading player for flight bookings. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current flight status, instant fare drops, amazing discounts, instant refunds and rebook options, price comparisons and many more interesting features.</p>
                </Box>
            </Grid>
        </>
    )
}

export default QnDetailsContainer;