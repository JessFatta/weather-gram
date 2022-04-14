import React from 'react';
import FavoritesCard from './FavoritesCard';
import { FavoritesProps, Faves } from '../Interfaces';
import './Favorites.css';


const Favorites: React.FC <FavoritesProps> = ({favorites}) => {
  const favoriteCards: JSX.Element[] = favorites.map((favorite: Faves) => {
    return (
      <FavoritesCard
        location={favorite.location}
        current={favorite.current}
        key={favorite.key}
      />
    )
  })

  return (
    <div className='favorite-cards-container'>
      {favoriteCards}
    </div>
  )
}

export default Favorites;
