import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav'
import ThreeDay from '../3Day/3Day';
import Card from "../Card/Card";
import Favorites from '../Favorites/Favorites';
import { getCurrentData } from '../apiCalls';
import cityNames from '../Random/RandomCityData.js';
import Footer from '../Footer/Footer';


class App extends Component  {
    state = {
        key: 0,
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
        error: false
    }

  componentDidMount = () => {
    this.getRandomCity()
  }

  saveFavoriteLocation = () => {
      const savedFavorites = this.state.favorites.filter((favorite: {location: string}) => favorite.location !== this.state.location)
        this.setState({favorites: [...savedFavorites, {key: this.state.key, location: this.state.location, current: this.state.current}]})
  }

  removeFavoriteLocation = (id: string) => {
    console.log(id)
    const filteredFavorites = this.state.favorites.filter((favorite: { location: string}) => {
      return favorite.location !== id
    })
    console.log(filteredFavorites)
    this.setState({favorites: filteredFavorites})
  }

  setLocation = (location: string) => {
    getCurrentData(location)
    .then(data => this.setState({key: Date.now(), location: data.location.name, current: data.current, error: false}))
    .catch(() => this.setState({error: true}))
  }

  getRandomIndex = (array: Array<string>) => {
    return Math.floor(Math.random() * array.length)
  }

  getRandomCity = () => {
    let cityIndex = this.getRandomIndex(cityNames)
    getCurrentData(cityNames[cityIndex])
    .then(data => this.setState({key: Date.now(), location: data.location.name, current: data.current}))
    .catch(() => this.setState({error: true}))
  }

  render() {
    return (
      <div className="App">
        <Nav
          setLocation={this.setLocation}
          getRandomCity={this.getRandomCity}
          />
          <div className='loading-error-message'>
            {this.state.error ? <h2>Something went wrong! Send complaints to Scott and Robbie</h2> :
          
        <Route exact path="/" render={() => {
          return <Card
          key={this.state.key}
          location={this.state.location}
          current={this.state.current}
          saveFavoriteLocation={this.saveFavoriteLocation}/>
        }} /> }
        </div>
        <Route path="/3Day" render={() => {
          return <ThreeDay location={this.state.location}/>
        }} />
        <Route path='/favorites' render={() => {
          return <Favorites 
          favorites={this.state.favorites}
          removeFavoriteLocation={this.removeFavoriteLocation} />
        }} />
        <Footer />
      </div>
    )
  }
}

export default App;
