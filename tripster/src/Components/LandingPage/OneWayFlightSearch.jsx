import React from 'react'
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Radio, Text, Input, FormLabel, FormControl, Select } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react'

const OneWayFlightSearch = () => {

    const [fetchedData, setFetchedData] = useState([]);

    const fetchFlightData = async () => {
        const data = await axios.get(`https://new-gpqr.onrender.com/airports`);
        setFetchedData(data.data);
    }

    useEffect(() => {
        fetchFlightData();
    }, []);
    console.log(fetchedData);

    return (
        <TabPanel >
            <Box 
            display='flex'  
            w='93%'
            h='250px'
            border='2px solid #f2f2f2'
            rounded='xl'
            margin='auto'
            justifyContent='center'
            >
            

                <Box borderRight='1px solid #f2f2f2' w='33%' p='2%'>
                    <FormControl>
                        <FormLabel>From</FormLabel>
                        <Text>Delhi</Text>
                        <Select placeholder='Select country' border='none'>
                            {
                                fetchedData.map((e) => {
                                    return (
                                        <option>{e.city_name}</option>
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
                        <Select placeholder='Select country'>
                            {
                                fetchedData.map((e) => {
                                    return (
                                        <option>{e.city_name}</option>
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
        </TabPanel>
    )
}

export default OneWayFlightSearch