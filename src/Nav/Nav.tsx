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
        <button><NavLink to="/">home </NavLink></button>
        <button><NavLink to="/3Day">3 day </NavLink></button>
        <button><NavLink to='/favorites'>Saved Locations</NavLink></button>
        <button onClick={() => getRandomCity()}>random</button>
      </section>
    </nav>
  )
}



export default Nav
