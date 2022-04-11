import React, { Component } from 'react';
//import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar';
import { getWeatherData } from '../apiCalls'

type AppState = {
  weather: {}
}


class App extends Component <{}, AppState> {
    state: AppState = {
      weather: {}
    }


  setLocation = (location: string) => {
    console.log('heyyyy')
    getWeatherData(location)
    .then(data => this.setState({weather: data}))
    .then(() => console.log(this.state.weather))
  }

  render() {
    return (
      <div>
        <Nav setLocation={this.setLocation}/>
      </div>
    )
  }
}

export default App;
