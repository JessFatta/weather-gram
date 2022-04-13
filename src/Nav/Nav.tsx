import React from 'react'
import { NavLink } from 'react-router-dom';
import { NavProps } from '../Interfaces';
import './Nav.css'
import SearchBar from '../SearchBar/SearchBar'


const Nav: React.FC <NavProps> = ({setLocation, getRandomCity}) => {
  return (
    <nav className='nav-container'>
      <h1 className='title'>Weather Gram</h1>
      <SearchBar setLocation={setLocation}/>
      <section className='buttons-container'>
        <button className='home-button'><NavLink to="/">Home</NavLink></button>
        <button className='3day-button'><NavLink to="/3Day">3 Day </NavLink></button>
        <button className='favorites-button'><NavLink to='/favorites'>Saved Locations</NavLink></button>
        <button className='random-button' onClick={() => getRandomCity()}><NavLink to="/">Random</NavLink></button>
      </section>
    </nav>
  )
}



export default Nav
