import React from 'react'
import { Box, TabPanel, Text, Input, FormLabel, FormControl, Select, Button } from '@chakra-ui/react';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import FareTypes from './FareTypes';
import { Context } from '../../Context/ContextProvider';
import { useContext } from 'react';

export const fetchData = async () => {
    const fetchFlights = await fetch(`https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`);
    let res = await fetchFlights.json();
    return res;
};

const OneWayFlightSearch = () => {
    const [flight, setFlight] = React.useState([]);
    const navigateTo = useNavigate();
    const { initData, setInitData, setdestdata } = useContext(Context);

    const temp = async () => {
        const temp2 = await fetchData();
        setFlight(temp2)
    }

    useEffect(() => {
        temp()
    }, [])

    const HandleSearch = () => {
        const filterData = flight.filter((e) => (
            initData.source === e.source && initData.destination === e.destination
        ));

        setdestdata(filterData);
        navigateTo('/searchPage');
    };

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
                            <Select placeholder='Select your location' value={initData.source} onChange={(e) => setInitData({ ...initData, source: e.target.value })}>
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
                            <Select placeholder='Select your destination' value={initData.destination} onChange={(e) => setInitData({ ...initData, destination: e.target.value })}>
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
                    p='2%'
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
        </>
    )
}

export default OneWayFlightSearch