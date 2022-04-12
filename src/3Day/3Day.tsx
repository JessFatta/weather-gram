import React, { Component } from 'react';
import { get3DayData } from '../apiCalls';
import ForecastCard from '../ForecastCard/ForecastCard';

type ThreeDayProps = {
  location: string
}

type ThreeDayState = {
  forecast: {
    forecastday: [
      {
        date: string,
        day: {
          maxtemp_f: null,
          mintemp_f: null,
          avghumidity: null,
          daily_chance_of_rain: null,
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
              maxtemp_f: null,
              mintemp_f: null,
              avghumidity: null,
              daily_chance_of_rain: null,
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
    return (
    this.state.forecast.forecastday.map(day => {
      return (
        <div className="three-day-container">
        <ForecastCard
        location={this.props.location}
        maxtemp_f={day.day.maxtemp_f}
        mintemp_f={day.day.mintemp_f}
        />
        </div>
      )
    })
  )
  }
}


export default ThreeDay
