import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MainWrap, ImageWrap, RecipeDetails } from '../styles/RecipeComponent';

const Recipe = ({ recipe }) => (recipe === undefined ? <h1>Loading......</h1> : (
  <div className="row showRecipe">
    <div className="fitImg">
      <MainWrap>
        <Link to={`/${recipe.idMeal}`}>
          <ImageWrap>
            <img src={recipe.strMealThumb} className="recipeImg" alt="img" />
          </ImageWrap>
          <RecipeDetails>
            <h2 className="name">{recipe.strMeal}</h2>
          </RecipeDetails>
        </Link>
      </MainWrap>
    </div>
  </div>
));

Recipe.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.number,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};

export default Recipe;
