import React from 'react'
import { FavoritesCardProps } from '../Interfaces'


const FavoritesCard: React.FC <FavoritesCardProps> =({removeFavoriteLocation, key, location, current}) => {
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
        <button className="unfavorite-button" onClick={() => removeFavoriteLocation()}>Remove Favorite</button>
      </div>
    </div>
  )
}


export default FavoritesCard
