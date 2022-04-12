import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar';
import ThreeDay from '../3Day/3Day';
import Card from "../Card/Card";
import { getCurrentData } from '../apiCalls'
import cityNames from '../Random/RandomCityData.js'

type AppState = {
    location: string,
    current: {
      temp_f: number,
      feelslike_f: number,
      condition: {text: string, icon: string},
      humidity: number,
      wind_mph: number,
      uv: number
    }
}


class App extends Component <{}, AppState> {
    state: AppState = {
        location: "",
        current: {
          temp_f: 0,
          feelslike_f: 0,
          condition: {text: "", icon: ""},
          humidity: 0,
          wind_mph: 0,
          uv: 0
        }
    }

  setLocation = (location: string) => {
    getCurrentData(location)
    .then(data => this.setState({ location: data.location.name, current: data.current }))
  }

  getRandomIndex = (array: any) => {
    return Math.floor(Math.random() * array.length)
  }

  getRandomCity = () => {
    console.log('hi')
    let cityIndex = this.getRandomIndex(cityNames)
    getCurrentData(cityNames[cityIndex])
    .then(data => this.setState({ location: data.location.name, current: data.current }))
  }

  render() {
    return (
      <div className="App">
        <Nav
          setLocation={this.setLocation}
          getRandomCity={this.getRandomCity}
          />
        <Route exact path="/" render={() => {
          return <Card
          location={this.state.location}
          current={this.state.current}
        />
        }} />
        <Route path="/3Day" render={() => {
          return <ThreeDay location={this.state.location}/>
        }}
        />
      </div>
    )
  }
}

export default App;
