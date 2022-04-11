import React, { Component } from 'react';
//import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar';


class App extends Component {
  constructor(props: {}) {
    super(props)
    this.state = {
      ideas: []
    }
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}

export default App;
