import React from 'react'
import { CardProps } from '../Interfaces'
import './Card.css'


const Card: React.FC <CardProps> =({key, location, current, saveFavoriteLocation}) => {
  return (
    <div className="card" key={key}>
    <img src={current.condition.icon} alt={current.condition.text}/>
      <p>Location: {location}</p>
      <p>Temperature: {current.temp_f} F</p>
      <p>Conditions: {current.condition.text}</p>
      <p>Feels Like: {current.feelslike_f} F</p>
      <p>Humidity: {current.humidity}%</p>
      <p>Wind: {current.wind_mph} mph</p>
      <p>UV Index: {current.uv}</p>
      <div className='favorite-button'>
        <button onClick={() => saveFavoriteLocation()}>Favorite</button>
      </div>
    </div>
  )
}


export default Card
