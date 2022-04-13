import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar';
import ThreeDay from '../3Day/3Day';
import Card from "../Card/Card";
import Favorites from '../Favorites/Favorites';
import { getCurrentData } from '../apiCalls';
import cityNames from '../Random/RandomCityData.js';



class App extends Component  {
    state = {
        location: "",
        current: {
          temp_f: 0,
          feelslike_f: 0,
          condition: {text: "", icon: ""},
          humidity: 0,
          wind_mph: 0,
          uv: 0
        },
        favorites: [],
        error: ''
    }

  componentDidMount = () => {
    this.getRandomCity()
  }

  saveFavoriteLocation = (): void => {
    console.log('hi')
    this.setState({favorites: [...this.state.favorites, {location: this.state.location, current: this.state.current}]})
  }

  setLocation = (location: string) => {
    getCurrentData(location)
    .then(data => this.setState({ location: data.location.name, current: data.current }))
  }

  getRandomIndex = (array: Array<string>) => {
    return Math.floor(Math.random() * array.length)
  }

  getRandomCity = () => {
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
          saveFavoriteLocation={this.saveFavoriteLocation}
        />
        }} />
        <Route path="/3Day" render={() => {
          return <ThreeDay location={this.state.location}/>
        }}
        />
        <Route path='/favorites' render={() => {
          return <Favorites favorites={this.state.favorites}/>
        }} />
      </div>
    )
  }
}

export default App;
