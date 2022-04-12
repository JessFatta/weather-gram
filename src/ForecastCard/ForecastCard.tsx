import React from 'react'
import './ForecastCard.css'

type ForecastCardProps = {
  location: string,
  // forecast: {
    // forecastday: [
    //   {
        // date: string,
        // day: {
          maxtemp_f: null,
          mintemp_f: null,
          // avghumidity: null,
          // daily_chance_of_rain: null,
          // condition: {
          //   text: string,
          //   icon: string
          // }
        // }
      }
    // ]
  // }
// }

const ForecastCard: React.FC <ForecastCardProps> =({location, maxtemp_f, mintemp_f}) => {
  return (
    <div className="forecast-card">
      <p>Location: {location}</p>
      <p>Today's High: {maxtemp_f} F</p>
      <p>Today's Low: {mintemp_f} F</p>
    </div>
  )
}


export default ForecastCard
