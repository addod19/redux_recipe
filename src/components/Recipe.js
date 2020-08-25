import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Recipe = ({ recipe}) => (
    <div className="main">
      <Link to={`/${recipe.id}`}>
        <img src={recipe.strMealThumb} className="recipeImg" alt="img" />
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
