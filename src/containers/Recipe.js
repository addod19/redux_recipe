import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { Link } from 'react-router-dom';

import { GETRECIPE } from '../redux/actions';

const Recipe = ({ getRecipe, location, recipe }) => {
  const result = location.state;
  useEffect(() => {
    getRecipe(result.idMeal);
  }, [getRecipe, result.idMeal]);

  return Object.entries(result) === undefined ? (
    <div>
      <h1>Loading.......</h1>
    </div>
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <img src={result.strMealThumb} alt="" className="recipeImg" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <h1 className="mb-4 text-center">{result.strMeal}</h1>
          <h2>Ingredients</h2>
          <ul className="ingredients">
            <li>
              {recipe.strIngredient1}
              {' '}
              :
              {recipe.strMeasure1}
            </li>
            <li>
              {recipe.strIngredient2}
              {' '}
              :
              {recipe.strMeasure2}
            </li>
            <li>
              {recipe.strIngredient3}
              {' '}
              :
              {recipe.strMeasure3}
            </li>
            <li>
              {recipe.strIngredient4}
              {' '}
              :
              {recipe.strMeasure4}
            </li>
            <li>
              {recipe.strIngredient5}
              {' '}
              :
              {recipe.strMeasure5}
            </li>
            <li>
              {recipe.strIngredient6}
              {' '}
              :
              {recipe.strMeasure6}
            </li>
          </ul>
          <h2 className="instructions">Instructions</h2>
          <p className="instruction text-justify">{recipe.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.instanceOf(Object),
  getRecipe: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  recipe: state.recipe.recipe,
});

const mapDispatchToProps = dispatch => ({
  getRecipe: id => dispatch(GETRECIPE(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
