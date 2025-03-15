import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = ({ detail }) => {
  return (
    <div className='meals'>
      {!detail || detail.length === 0 ? (
        <p>Sorry, Data Not Found</p>
      ) : (
        detail.map((curItem) => (
          <div className='mealImg' key={curItem.idMeal}>
            <img
              src={curItem.strMealThumb}
              alt={curItem.strMeal || 'Meal Image'}
            />
            <p>{curItem.strMeal}</p>
            <NavLink to={`/${curItem.idMeal}`}>
              <button>Recipe</button>
            </NavLink>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;
