import React, { Component } from 'react';
import { get7DayData } from '../apiCalls';
import ForecastCard from '../ForecastCard/ForecastCard';
import './7Day.css'

type SevenDayProps = {
  location: string
}

type SevenDayState = {
  forecast: {
    forecastday: [
      {
        date: string,
        day: {
          maxtemp_f: number,
          mintemp_f: number,
          avghumidity: number,
          daily_chance_of_rain: number,
          condition: {
            text: string,
            icon: string
          }
        }
      }
    ]
  }
}

class SevenDay extends Component <SevenDayProps, SevenDayState> {
    state: SevenDayState = {
      forecast: {
        forecastday: [
          {
            date: "",
            day: {
              maxtemp_f: 0,
              mintemp_f: 0,
              avghumidity: 0,
              daily_chance_of_rain: 0,
              condition: {
                text: "",
                icon: ""
              }
            }
          }
        ]
      }
    }

  componentDidMount = () => {
    get7DayData(this.props.location)
    .then(data => this.setState({forecast: data.forecast}))
    .then(() => console.log(this.state.forecast))
  }

  render() {
    return (
    this.state.forecast.forecastday.map(day => {
      return (
        <div className="seven-day-container">
        <ForecastCard
        location={this.props.location}
        maxtemp_f={day.day.maxtemp_f}
        mintemp_f={day.day.mintemp_f}
        date={day.date}
        icon={day.day.condition.icon}
        text={day.day.condition.text}
        avghumidity={day.day.avghumidity}
        daily_chance_of_rain={day.day.daily_chance_of_rain}
        key={Date.now()}
        />
        </div>
      )
    })
  )
  }
}


export default SevenDay
