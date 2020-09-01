import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { Link } from 'react-router-dom';

import { GETRECIPE } from '../redux/actions';

const Recipe = ({ getRecipe, location }) => {
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
              {result.strIngredient1}
              {' '}
              :
              {result.strMeasure1}
            </li>
            <li>
              {result.strIngredient2}
              {' '}
              :
              {result.strMeasure2}
            </li>
            <li>
              {result.strIngredient3}
              {' '}
              :
              {result.strMeasure3}
            </li>
            <li>
              {result.strIngredient4}
              {' '}
              :
              {result.strMeasure4}
            </li>
            <li>
              {result.strIngredient5}
              {' '}
              :
              {result.strMeasure5}
            </li>
            <li>
              {result.strIngredient6}
              {' '}
              :
              {result.strMeasure6}
            </li>
          </ul>
          <h2 className="instructions">Instructions</h2>
          <p className="instruction text-justify">{result.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  getRecipe: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProp = state => ({
  recipe: state.recipe.recipe,
});

const mapDispatchToProps = dispatch => ({
  getRecipe: id => dispatch(GETRECIPE(id)),
});

export default connect(mapStateToProp, mapDispatchToProps)(Recipe);
