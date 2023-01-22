import React from 'react'
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Radio, Text, Input, FormLabel, FormControl, Select, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react'
import SearchResults from '../../Pages/SearchResults';
import { useNavigate } from 'react-router-dom';
import FareTypes from './FareTypes';
// import SearchPage from '../../Pages/SearchResults';


// arrival: "1:40 PM"
// departure: "7:40 AM"
// destination: "florida"
// duration: "6 hours"
// price: "50 USD"
// source: "seattle"

export const fetchData = async () => {


    const fetchFlights = await fetch(`https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`);
    let res = await fetchFlights.json();
    return res;

};

const OneWayFlightSearch = () => {

    const [flight, setFlight] = React.useState([]);
    const [source, setSource] = React.useState('');
    const [dest, setDest] = React.useState('');
    const [data, setData] = React.useState([]);
    const navigateTo = useNavigate();

    const temp = async () => {
        const temp2 = await fetchData();
        // console.log(temp2);
        setFlight(temp2)
    }

    useEffect(() => {
        temp()
    }, [])


    // console.log(data);
    const HandleSearch = () => {
        const filterData = flight.filter((e) => (
            source === e.source,
            dest === e.destination
        ));

        setData(filterData);
        // navigateTo('/searchPage');

    };
    console.log(data);

    return (
        <>
            <TabPanel >
                <Box
                    display='flex'
                    w='93%'
                    h='auto'
                    border='2px solid #f2f2f2'
                    rounded='xl'
                    margin='auto'
                    justifyContent='center'
                >

                    <Box borderRight='1px solid #f2f2f2' w='33%' p='2%'>
                        <FormControl>
                            <FormLabel>From</FormLabel>
                            <Text></Text>
                            <Select placeholder='Select State' value={source} onChange={(e) => setSource(e.target.value)}>
                                {
                                    flight.map((e, i) => {
                                        return (
                                            <option key={i}>{e.source}</option>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    {/*  */}
                    <Box borderRight='1px solid #f2f2f2' w='33%' p='2%'>
                        <FormControl>
                            <FormLabel>To</FormLabel>
                            <Select placeholder='Select State' value={dest} onChange={(e) => setDest(e.target.value)}>
                                {
                                    flight.map((e, i) => {
                                        return (
                                            <option key={i}>{e.destination}</option>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    {/*  */}
                    <Box w='33%' p='2%'>
                        <Text>Departure</Text>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                        />
                    </Box>
                </Box>
                <FareTypes />

                <Box m='auto'
                    display='flex'
                    p='1%'
                >
                    <Button
                        background='linear-gradient(to right, #50aefe, #0c61f4)'
                        _hover={{
                            background: 'linear-gradient(to right, #90aefe, #0e61f9)',
                            color: 'white',
                        }}
                        position='relative'
                        color='white'
                        m='auto'
                        rounded='full'
                        p='30px 80px'
                        fontWeight='700'
                        fontSize='30px'
                        onClick={HandleSearch}
                    >SEARCH</Button>
                </Box>
            </TabPanel>

            {
                data.length > 0 ? <SearchResults data={data} /> : ''
            }
        </>
    )
}

export default OneWayFlightSearch