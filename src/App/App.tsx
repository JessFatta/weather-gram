import React, { Component } from 'react';
//import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar';
import Card from "../Card/Card";
import { getWeatherData } from '../apiCalls'

type AppState = {
    location: string,
    current: {
      temp_f: null,
      condition: {text: string, icon: string}
    }
}


class App extends Component <{}, AppState> {
    state: AppState = {
        location: "",
        current: {
          temp_f: null,
          condition: {text: "", icon: ""}

        }
    }

  setLocation = (location: string) => {
    getWeatherData(location)
    .then(data => this.setState({ location: data.location.name, current: data.current }))

    .then(() => console.log("THISSTATECURRE", this.state.current))
  }

  render() {
    return (
      <div>
        <Nav setLocation={this.setLocation}/>
        <Card
          location={this.state.location}
          current={this.state.current}
        />
      </div>
    )
  }
}

export default App;
