import React from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css'
import SearchBar from '../SearchBar/SearchBar'

type NavProps = {
  setLocation: Function
  getRandomCity: Function
}

const Nav: React.FC <NavProps> = ({setLocation, getRandomCity}) => {
  return (
    <nav className='nav-container'>
      <h1 className='title'>Weather Gram</h1>
      <SearchBar setLocation={setLocation}/>
      <section className='buttons-container'>
        <button><NavLink to="/">home </NavLink></button>
        <button><NavLink to="/3Day">3 day </NavLink></button>
        <button onClick={() => getRandomCity()}>random</button>
      </section>
    </nav>
  )
}



export default Nav
