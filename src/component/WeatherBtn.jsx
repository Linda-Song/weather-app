import React, { useState } from 'react'


const WeatherBtn = ({cities}) => {
  console.log(cities);
   

  return (
    <div className='btn-box'>
      <div className='btn-top'>
        <button onClick={()=>{}} className='city-btn'>Current</button>
      </div>      
      <div className='btn-bottom'>        
      {cities.map((item) => (
          <button className='city-btn'>{item}</button>
        ))}
      </div>  
    </div>
  )
}

export default WeatherBtn
