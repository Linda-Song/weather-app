import React from 'react'


const WeatherBtn = ({cities,setCity}) => {
  
   
  return (
    <div className='btn-box'>
      <div className='btn-top'>
        <button onClick={()=>setCity("")} className='city-btn'>Current</button>
      </div>      
      <div className='btn-bottom'>        
      {cities.map((item,index) => (
          <button key={index} onClick={() => setCity(item)}  className='city-btn'>{item}</button>
        ))}
      </div>  
    </div>
  )
}

export default WeatherBtn
