import React, { Component } from 'react';
import { get3DayData } from '../apiCalls';
import ForecastCard from '../ForecastCard/ForecastCard';
import "./3Day.css";

type ThreeDayProps = {
  location: string
}

type ThreeDayState = {
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

class ThreeDay extends Component <ThreeDayProps, ThreeDayState> {
    state: ThreeDayState = {
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

  componentDidMount() {
    get3DayData(this.props.location)
    .then(data => this.setState( { forecast: data.forecast}))
  }

  render() {
    const forecastCards: JSX.Element[] = this.state.forecast.forecastday.map(day => {
      return (
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
      )
    })
  return (
    <div className="three-day-container">
    {forecastCards}
    </div>
  )
  }
}


export default ThreeDay
