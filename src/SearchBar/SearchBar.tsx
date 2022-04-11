import React, { Component, MouseEvent } from 'react'
//import { NavLink } from 'react-router-dom';

type SearchBarState = {
  location: string
}


class SearchBar extends Component <{}, SearchBarState> {
    state: SearchBarState = {
      location: ''
  }

  handleChange = (event: {target: {value: string}}) => {
    this.setState({location: event.target.value})
  }

  submitLocation = (event: MouseEvent) => {
    event.preventDefault()
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
          <button onClick={(event) => this.submitLocation}>Let's go!</button>
      </div>
    )
  }
}

export default SearchBar