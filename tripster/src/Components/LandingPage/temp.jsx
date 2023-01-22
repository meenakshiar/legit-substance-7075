// import React from 'react'
// // import logo from '../images/tripsterLogo.png'
// import axios from "axios";
// // import ocean from '../images/oceanVideo.mp4'
// import { AspectRatio } from '@chakra-ui/react'

// const Temp = () => {

// const options = {
//   method: 'GET',
//   url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/airports.json?_limit=10',
//   headers: {
//     'X-Access-Token': 'undefined',
//     'X-RapidAPI-Key': '0db51033f5msh147bc6857f80049p1c77cfjsnddec33addf28',
//     'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


//   return (
//     <>
//     {/* <div className='navbar'>
//           </div>
//       <img src={logo} alt="" />
//         <AspectRatio maxW='100%' ratio={6/2}>
//         <video // title='' 
//           src={ocean}
//           muted
//           autoPlay
//           loop
//           />
//         </AspectRatio>
//           <h1>Hello</h1>
//       <div className='flightSearchContainer'>
//     </div> */}
//     </>
//   )
// }

// export default Temp;












// import { AddIcon, MinusIcon } from "@chakra-ui/icons"
// import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
// import Poll from "./rangeslider"
// export const Section = () => {
//     return <>
//     <div >
//         <Accordion defaultIndex={[0]} allowMultiple allowToggle>
//             <AccordionItem >
//                 {({ isExpanded }) => (
//                     <>
//                         <h2>
//                             <AccordionButton _hover="rgb(255,255,255)" bg="rgb(255,255,255)">
//                                 <Box bg="rgb(255,255,255)" as="span" flex='1' textAlign='left'>
//                                     <h1 style={{fontWeight:"bold"}}>Price Range</h1>
//                                 </Box>
//                                 {isExpanded ? (
//                                     <MinusIcon fontSize='12px' />
//                                 ) : (
//                                     <AddIcon fontSize='12px' />
//                                 )}
//                             </AccordionButton>
//                         </h2>
//                         <AccordionPanel pb={4}>
//                             <Poll />
//                         </AccordionPanel>
//                     </>
//                 )}
//             </AccordionItem>
//         </Accordion>
//         </div>
//     </>
// }


// // ---------------------------------------------------------------------------------------------
// import { Stack } from "@chakra-ui/react"
// import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from "@chakra-ui/slider"
// import { Input } from "antd"

// const Poll = () => {

//     return <>
//         <RangeSlider
//             aria-label={['min', 'max']}
//             colorScheme='red'
//             defaultValue={[10, 30]}
//         >
//             <RangeSliderTrack>
//                 <RangeSliderFilledTrack />
//             </RangeSliderTrack>
//             <RangeSliderThumb index={0} />
//             <RangeSliderThumb index={1} />
//         </RangeSlider>
//         <label htmlFor="">From</label>
//         <Input placeholder="15000" htmlSize={4} width='auto' />
//         <label htmlFor="">To</label>

//         <Input placeholder="1000" htmlSize={4} width='auto' />
//         <button style={{ backgroundColor: "red", marginTop: "7px", padding: "5px 50px", borderRadius: "5px 15px", color: "white" }}>GO</button>
//     </>
// }



// // ---------------------------------------------------------------------------------------------




// const handlechange = (e) => {
//     let val = e.target.value;
//     axios.get(`http://localhost:8080/products?_limit=6&q=${val}`)
//         .then((res) => setdata(res.data))

// }

// const Sortasc = () => {
//     let order = "asc"
//     let type = "price"
//     axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
//         .then((res) => setdata(res.data))
// }
// const Sortdsc = () => {
//     let order = "desc"
//     let type = "price"
//     axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
//         .then((res) => setdata(res.data))

// }
// const discountasc = () => {
//     let order = "asc"
//     let type = "discountPercentage"
//     axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
//         .then((res) => setdata(res.data))

// }
// const discountdesc = () => {
//     let order = "desc"
//     let type = "discountPercentage"
//     axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
//         .then((res) => setdata(res.data))

// }
// const ratingasc = () => {
//     let order = "asc"
//     let type = "rating"
//     axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
//         .then((res) => setdata(res.data))

// }
// const ratingdesc = () => {
//     let order = "desc"
//     let type = "rating"
//     axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
//         .then((res) => setdata(res.data))

// }
// const staockasc = () => {
//     let order = "asc"
//     let type = "stock"
//     axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
//         .then((res) => setdata(res.data))

// }
// const stockdesc = () => {
//     let order = "desc"
//     let type = "stock"
//     axios.get(`http://localhost:8080/products?_limit=6&_order=${order}&_sort=${type}`)
//         .then((res) => setdata(res.data))

// }










