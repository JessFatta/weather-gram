import React from 'react'
import { ForecastCardProps } from '../Interfaces'
import  dayjs from 'dayjs';
import '../Card/Card.css'


const ForecastCard: React.FC <ForecastCardProps> =({location, maxtemp_f, mintemp_f, avghumidity, daily_chance_of_rain, text, icon, date}) => {
  return (
    <div className="card">
      <img src={icon} alt={text} />
      <p>Location: {location}</p>
      <p>Date: {dayjs(date).format('MMM DD, YYYY')}</p>
      <p>High: {maxtemp_f}° F</p>
      <p>Low: {mintemp_f}° F</p>
      <p>Average Humidity: {avghumidity}%</p>
      <p>Chance of Rain: {daily_chance_of_rain}%</p>
    </div>
  )
}


export default ForecastCard
