import React, { Component, MouseEvent } from 'react';
import './SearchBar.css';
//import { NavLink } from 'react-router-dom';

type SearchBarState = {
  location: string
}

type Props = {
  setLocation: Function
}


class SearchBar extends Component <Props, SearchBarState> {
    state: SearchBarState = {
      location: ''
  }

  handleChange = (event: {target: {value: string}}) => {
    this.setState({location: event.target.value})
  }

  submitLocation = (event: MouseEvent) => {
    event.preventDefault()
    console.log('yoooooo')
    this.props.setLocation(this.state.location)
    this.clearSearchBar()
  }

  clearSearchBar = () => {
    this.setState({location: ''})
  }

  render() {
    return (
      <div className='search-bar-container'>
        <input
          className='search-bar'
          type='text'
          name='search-bar'
          placeholder='Enter Location'
          value={this.state.location}
          onChange={(event) => this.handleChange(event)}
          />
          <button className='lets-go-button' onClick={(event) => this.submitLocation(event)}>Let's go!</button>
      </div>
    )
  }
}

export default SearchBar
