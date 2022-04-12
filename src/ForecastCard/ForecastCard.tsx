import React from 'react'
import './ForecastCard.css'

type ForecastCardProps = {
  location: string,
  date: string,
  maxtemp_f: number,
  mintemp_f: number,
  avghumidity: number,
  daily_chance_of_rain: number,
  text: string,
  icon: string
}

const ForecastCard: React.FC <ForecastCardProps> =({location, maxtemp_f, mintemp_f, avghumidity, daily_chance_of_rain, text, icon, date}) => {
  return (
    <div className="forecast-card">
      <img src={icon} alt={text} />
      <p>Location: {location}</p>
      <p>Date: {date}</p>
      <p>High: {maxtemp_f} F</p>
      <p>Low: {mintemp_f} F</p>
      <p>Average Humidity: {avghumidity}%</p>
      <p>Chance of Rain: {daily_chance_of_rain}%</p>
    </div>
  )
}


export default ForecastCard
