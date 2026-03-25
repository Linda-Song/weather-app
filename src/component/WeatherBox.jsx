import React from 'react'
import Cloud from '../assets/Cloud.png'

const WeatherBox = ({weather}) => {
  console.log("weather Data",weather)
  const temp =  weather?.main.temp
  const Fahrenheit = (temp * 1.8 + 32 ).toFixed(1)

  return (
    <div className='weather-box'>
      <div className='weather-top'>
        <h1>{weather?.name}</h1>
        <img src={Cloud}></img>
      </div>
      <div className='weather-bottom'>
        <h2>{weather?.weather[0].main}</h2>
        <div className='weather-temp'>
          <h3>{temp}∘C</h3>
          <p>Humidity: {weather?.main.humidity}% / {Fahrenheit}∘F</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherBox
