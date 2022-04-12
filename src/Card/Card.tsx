import React from 'react'
import './Card.css'

type CardProps = {
  location: string,
  current: {
    temp_f: number,
    feelslike_f: number,
    condition: {text: string, icon: string},
    humidity: number,
    wind_mph: number,
    uv: number
  }
}

const Card: React.FC <CardProps> =({location, current}) => {
  return (
    <div className="card">
    <img src={current.condition.icon} alt={current.condition.text}/>
      <p>Location: {location}</p>
      <p>Temperature: {current.temp_f} F</p>
      <p>Condition: {current.condition.text}</p>
      <p>Feels Like: {current.feelslike_f} F</p>
      <p>Humidity: {current.humidity} %</p>
      <p>Wind: {current.wind_mph} mph</p>
      <p>UV Index: {current.uv}</p>
      <div className='favorite-button'>
        <button>Favorite</button>
      </div>
    </div>
  )
}


export default Card
