import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Recipe = ({ recipe}) => (
    <div className="main">
      <Link to={`/${recipe.id}`}>
        <img src={`https://www.themealdb.com/images/ingredients/Lime.png`} className="recipeImg" alt="img" />
        <p>
          ##
          {recipe.id}
        </p>
        <h5 className="name">{recipe.name}</h5>
      </Link>
    </div>
);

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
}

export default Recipe;
