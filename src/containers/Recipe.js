import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { MainWrap, ImageWrap, RecipeDetails } from '../styles/RecipeComponent';
// import { Link } from 'react-router-dom';

import { GET_RECIPE } from '../redux/actions';

const Recipe = ( { getRecipe, recipe, location } ) => {
  const result = location.state;
  console.log(result);
  useEffect( () => {
    getRecipe(result.idMeal);
  }, [getRecipe, result.idMeal]);

  return  Object.entries(result) === undefined ? (
    <div>
      <h1>Loading.......</h1>
    </div>
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-md-6 card card-body">
          <img src={result.strMealThumb} alt="" />
        </div>
        <div className="col-md-6 ">
          <h1 className="mb-4 text-center">{result.strMeal}</h1>
          <h2>Ingredients</h2>
          <ul className="ingredients">
            <li>
              {result.strIngredient1} : {result.strMeasure1}
            </li>
            <li>
              {result.strIngredient2} : {result.strMeasure2}
            </li>
            <li>
              {result.strIngredient3} : {result.strMeasure3}
            </li>
            <li>
              {result.strIngredient4} : {result.strMeasure4}
            </li>
            <li>
              {result.strIngredient5} : {result.strMeasure5}
            </li>
            <li>
              {result.strIngredient6} : {result.strMeasure6}
            </li>
          </ul>
          <h2 className="instructions">Instructions</h2>
          <p className="instruction text-justify">{result.strInstructions}</p>
        </div>
      </div>
    </div>
  )
};

Recipe.propTypes = {
  recipe: PropTypes.instanceOf(Object),
  getRecipe: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProp = state => ({
  recipe: state.recipes,
});

const mapDispatchToProps = dispatch => ({
  getRecipe: id => dispatch(GET_RECIPE(id))
});

export default connect(mapStateToProp, mapDispatchToProps)(Recipe);
