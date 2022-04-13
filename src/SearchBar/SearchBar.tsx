import React, { Component, MouseEvent } from 'react';
import './SearchBar.css';
import { NavLink } from 'react-router-dom';

type SearchBarState = {
  location: string,
  hasError: boolean
}

type Props = {
  setLocation: Function
}


class SearchBar extends Component <Props, SearchBarState> {
    state: SearchBarState = {
      location: '',
      hasError: false
  }

  handleChange = (event: {target: {value: string}}) => {
    this.setState({location: event.target.value})
  }

  submitLocation = (event: MouseEvent) => {
    event.preventDefault()
    this.props.setLocation(this.state.location)
    if(!this.state.location) {
      this.setState({hasError: true})
    } else {
      this.setState({hasError: false})
    }
    this.clearSearchBar()
  }

  clearSearchBar = () => {
    this.setState({location: ''})
  }



  render() {
    return (
      <div>
        <div className='search-bar-container'>
          <input
            className='search-bar'
            type='text'
            name='search-bar'
            placeholder='Enter Location'
            value={this.state.location}
            onChange={(event) => this.handleChange(event)}
            />
          <button className='lets-go-button' onClick={(event) => this.submitLocation(event)}><NavLink to="/">Let's Go!</NavLink></button>
        </div>
        <div>
          {this.state.hasError && <p>Please enter a location</p>}
        </div>
      </div> 
    )
  }
}

export default SearchBar
