import React from 'react'

const SearchResults = ({data}) => {
    // const { departure, duration, arrival, price } = props
    // console.log(data)
    // console.log(data[0].source)
  
    return (
      <table >
        {/* add columnsheadings */}
        <thead>
        <tr >
          <th>Departure</th>
          <th>Duration</th>
          <th>Arrival</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody data-testid="flight-results">
          {/* //  map through the results and display as rows */}
              {data.map((e, i) =>{
  
                return  (
                <tr key={i}>
                <td>{e.departure}</td> 
                <td>{e.duration}</td>
                <td>{e.arrival}</td>
                <td>{e.price}</td>
                </tr>
                )
             }) }
        </tbody>
      </table>
  
    );
  
  };

export default SearchResults;