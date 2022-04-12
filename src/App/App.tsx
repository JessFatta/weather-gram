import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar';
import ThreeDay from '../3Day/3Day';
import Card from "../Card/Card";
import { getCurrentData } from '../apiCalls'

type AppState = {
    location: string,
    current: {
      temp_f: null,
      feelslike_f: null,
      condition: {text: string, icon: string},
      humidity: null,
      wind_mph: null,
      uv: null
    }
}


class App extends Component <{}, AppState> {
    state: AppState = {
        location: "",
        current: {
          temp_f: null,
          feelslike_f: null,
          condition: {text: "", icon: ""},
          humidity: null,
          wind_mph: null,
          uv: null
        }
    }

  setLocation = (location: string) => {
    getCurrentData(location)
    .then(data => this.setState({ location: data.location.name, current: data.current }))

    .then(() => console.log("THISSTATECURRE", this.state.current))
  }

  render() {
    return (
      
      <div className="App">
        <Nav setLocation={this.setLocation}/>
        <Card
          location={this.state.location}
          current={this.state.current}
        />
        <Route path="/3Day" render={() => {
          return <ThreeDay location={this.state.location}/>
        }}
        />
      </div>
    )
  }
}

export default App;
