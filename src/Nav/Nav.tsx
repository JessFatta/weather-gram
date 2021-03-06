import React from 'react'
import { NavLink } from 'react-router-dom';
import { NavProps } from '../Interfaces';
import './Nav.css'
import SearchBar from '../SearchBar/SearchBar'
import climate from '../climate.png';


const Nav: React.FC <NavProps> = ({setLocation, getRandomCity}) => {
  return (
    <nav className='nav-container'>
    <div className='title-searchbar-container'>
      <NavLink to='/'><img src={climate} alt="Climate World" /></NavLink>
      <NavLink to='/'><h1 className='title'>Weather Gram</h1></NavLink>
      <SearchBar setLocation={setLocation}/>
    </div>
      <section className='buttons-container'>
      <NavLink to="/"><button className='home-button'>Home</button></NavLink>
    <NavLink to="/3Day"><button className='three-day-button'>3 Day Forecast</button></NavLink>
    <NavLink to='/favorites'><button className='favorites-button'>Saved Locations</button></NavLink>
    <NavLink to="/"><button className='random-button' onClick={() => getRandomCity()}>Explore</button></NavLink>
      </section>
    </nav>
  )
}



export default Nav
