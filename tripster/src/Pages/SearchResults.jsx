import { Box, Input, Text } from '@chakra-ui/react';
import React, { useContext } from 'react'
import FareTypes from '../Components/LandingPage/FareTypes';
import Navbar from '../Components/LandingPage/Navbar';
import { Context } from '../Context/ContextProvider';
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from "@chakra-ui/slider"
import { AiFillSafetyCertificate } from 'react-icons/ai';

// arrival: "1:40 PM"
// departure: "7:40 AM"
// destination: "florida"
// duration: "6 hours"
// price: "50 USD"
// source: "seattle"

const SearchResults = () => {

  const { destdata } = useContext(Context);
  // console.log(destdata.map((e) => e.duration));

  return (
    <>
      <Box h='400px' bg='linear-gradient(#061526, #144073)'>
        <Navbar />
        <Box mt='4%'>
          <FareTypes />
        </Box>
      </Box>

      <Box bg=' #e7e7e7' h='800px'>

        <Box w='80%' h='500px' ml='10%' display='flex' >

          <Box w='350px' bg='white' mt='-8%' p='30px'>
            <Text fontSize={'20px'} fontWeight='700' mb='3%'>One Way Price</Text>
            <RangeSlider
              aria-label={['min', 'max']}
              colorScheme='blue'
              defaultValue={[10, 30]}
              w='280px'
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <br />
            <Box mt={'3%'}>
              <label htmlFor="">From</label>
              <Input placeholder="15000" htmlSize={4} width='auto' />
              <label htmlFor="">To</label>
              <Input placeholder="1000" htmlSize={4} width='auto' />
            </Box>

            <Box mt={'5%'}>
            <Text fontSize={'20px'} fontWeight='700' >Stops from New Delhi </Text>
            </Box>
          </Box>

          {/*  */}

          <Box ml='10%' mt='-8%'>

            {
              destdata.map((e) => {
                return (
                  <Text color='white' fontSize='28px' fontWeight='700'>
                    Flights From {e.source} to {e.destination}
                  </Text>
                )
              })}


            <Box bg='#f4fef4' display={'flex'} mt='2%' p='5px 20px'>
              <Box m='auto' mr='15px'>
                <AiFillSafetyCertificate fontSize={'40px'} />
              </Box>
              <Box>
                <Text fontSize='16px' fontWeight='700'>Important Advisories & State Guidelines</Text>
                <Text> With travel opening up, govt. advisories and state/UT guidelines are constantly evolving. Please check the latest updates before travelling.KNOW MORE</Text>
              </Box>
            </Box>

            <Box bg='white' mt='3%' p='2%'>
              <Box display='flex' gap='200px' bg='#f4f4f4' p='15px' m='15px'>
                <Text>Departure</Text>
                <Text>Duration</Text>
                <Text>Arrival</Text>
                <Text>Price</Text>
              </Box>
            </Box>

            {
              destdata.map((e) => {
                return (
                  <Box bg='#b9daf0' mt='3%' p='2%'>
                    <Box display='flex' bg='white' gap='200px' p='15px' m='15px'>
                      <Text>{e.departure}</Text>
                      <Text>{e.duration}</Text>
                      <Text>{e.arrival}</Text>
                      <Text>{e.price}</Text>
                    </Box>
                  </Box>
                )
              })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SearchResults;