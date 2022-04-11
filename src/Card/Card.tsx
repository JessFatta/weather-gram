import React from 'react'
import './Card.css'

type CardProps = {
  location: string,
  current: {
    temp_f: null
  }
}

const Card: React.FC <CardProps> =({location, current}) => {
  return (
    <div className="card">
      <p>Location: {location}</p>
      <p>Temperature: {current.temp_f}</p>
      <p>Conditions</p>
      <p>Feels Like:</p>
      <p>Humidity</p>
      <p>Wind</p>
      <p>UV Index</p>
    </div>
  )
}


export default Card
