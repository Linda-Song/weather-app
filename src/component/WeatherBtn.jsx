import React from 'react'


const WeatherBtn = ({ cities, setCity, selectedCity}) => { 
  return (
    <div className='btn-box'>
      <div className='btn-top'>
      
        <button 
          onClick={() => setCity("")} 
          className={`city-btn ${selectedCity === "" ? "btn-active" : ""}`}
        >
          Current
        </button>
      </div>      
      
      <div className='btn-bottom'>        
       
        {cities.map((item, index) => (
          <button 
            key={index} 
            onClick={() => setCity(item)}  
            className={`city-btn ${selectedCity === item ? "btn-active" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>  
    </div>
  )
}
export default WeatherBtn;