import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MainWrap, ImageWrap, RecipeDetails } from '../styles/RecipeComponent';

const Recipe = ({ recipe}) => (
  <div className="row">
    <div className="">
      <MainWrap>
        <Link to={`/${recipe.idMeal}`}>
          <ImageWrap>
            <img src={recipe.strMealThumb} className="recipeImg" alt="img" />
          </ImageWrap>
          <RecipeDetails>
            <p>
              { }
              {recipe.idMeal}
            </p>
            <h5 className="name">{recipe.strMeal}</h5>
          </RecipeDetails>
        </Link>
      </MainWrap>
    </div>
  </div>
);

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
}

export default Recipe;
