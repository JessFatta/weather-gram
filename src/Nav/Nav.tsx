import React from 'react'
//import { NavLink } from 'react-router-dom';
import './Nav.css'
import SearchBar from '../SearchBar/SearchBar'

const Nav: React.FC = () => {
  return (
    <header className='nav-container'>
      <SearchBar />
    </header>
  )
}



export default Nav 