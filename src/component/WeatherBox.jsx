import React from 'react'
import CloudImg from '../assets/Cloud.png'
import ClearImg from '../assets/Clear.png'
import SnowImg from '../assets/snow.png'
import RainImg from '../assets/rain.png'
import ThunderImg from '../assets/thunder.png'

const WeatherBox = ({weather}) => {
  const temp =  weather?.main.temp;
  const Fahrenheit = (temp * 1.8 + 32 ).toFixed(1);
  const nowWeather = weather?.weather[0].main; 

  const weatherImg = {
    Clouds: CloudImg,
    Clear: ClearImg,
    Snow: SnowImg,
    Rain: RainImg,
    Thunderstorm: ThunderImg

  };

  const selectImg = weatherImg[nowWeather] || CloudImg;

  return (
    <div className='weather-box'>
      <div className='weather-top'>
        <h1>{weather?.name}</h1>
        <img src={selectImg} alt={nowWeather} className='weather-img' />
        
      </div>
      <div className='weather-bottom'>
        <h2>{nowWeather}</h2>
        <div className='weather-temp'>
          <h3>{temp}∘C</h3>
          <p>Humidity: {weather?.main.humidity}% / {Fahrenheit}∘F</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherBox
