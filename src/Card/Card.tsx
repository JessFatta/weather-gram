import React from 'react'
import './Card.css'

type CardProps = {
  location: string,
  current: {
    temp_f: null,
    feelslike_f: null,
    condition: {text: string, icon: string},
    humidity: null,
    wind_mph: null,
    uv: null
  }
}

const Card: React.FC <CardProps> =({location, current}) => {
  return (
    <div className="card">
      <p>Location: {location}</p>
      <p>Temperature: {current.temp_f} F</p>
      <p>Condition: {current.condition.text}</p>
      <img src={current.condition.icon} alt={current.condition.text}/>
      <p>Feels Like: {current.feelslike_f} F</p>
      <p>Humidity: {current.humidity} %</p>
      <p>Wind: {current.wind_mph} mph</p>
      <p>UV Index: {current.uv}</p>
    </div>
  )
}


export default Card
