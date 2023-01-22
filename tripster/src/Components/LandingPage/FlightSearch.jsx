import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Radio, Text } from '@chakra-ui/react';
import React from 'react'
import OneWayFlightSearch from './OneWayFlightSearch';
// import SearchButton from './SearchButton';

const FlightSearch = () => {

    return (
        // <div className='FlightSearchWrapper'>
        // </div>
        <Box bg='white' w='80%' margin='auto' h='370px' mt='3%' rounded='xl' boxShadow='lg'>
            <Tabs>
                <TabList p='20px'>
                    <Tab>
                        <Radio colorScheme='blue' value='1'>
                            One Way
                        </Radio>
                    </Tab>
                    <Tab>
                        <Radio colorScheme='blue' value='1'>
                            Round Trip
                        </Radio>
                    </Tab>
                    <Tab>
                        <Radio colorScheme='blue' value='1'>
                            Multi City
                        </Radio>
                    </Tab>
                    <Text ml='50%'>Book International and Domestic Flights</Text>
                </TabList>
                <TabPanels>
                    {/* Fligh search Section */}
                    <OneWayFlightSearch />

                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </Box>
    )
}

export default FlightSearch;