import React from 'react';
import FavoritesCard from './FavoritesCard';
import { FavoritesProps, Faves } from '../Interfaces';
import './Favorites.css';


const Favorites: React.FC <FavoritesProps> = ({removeFavoriteLocation, favorites}) => {
  const favoriteCards: JSX.Element[] = favorites.map((favorite: Faves) => {
    return (
      <FavoritesCard
        location={favorite.location}
        current={favorite.current}
        key={favorite.key}
        removeFavoriteLocation={removeFavoriteLocation}
      />
    )
  })

  return (
    <div>
     {!favorites.length && <div className="add-container">
         <h2>Add Some Favorites!</h2> 
      </div>}
      <div className='favorite-cards-container'>
        {favoriteCards}
      </div>
    </div>
  )
}

export default Favorites;
