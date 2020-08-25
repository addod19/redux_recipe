import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecipe } from '../redux/actions';



const Recipe = ({
  recipe: { recipe, loading }, getRecipe, match
}) => {
  useEffect(() => {
    const id = match.params;
      getRecipe(id);
  }, [loading]);

  return recipe && loading === null ? <h1>loading....</h1> : (
    <div className="row">
      <div className="col-md-6">
        <h3>Recipe</h3>
        {/* <img src={} alt="" /> */}
      </div>
      <div className="col-md-6">
        <h2>Ingredients</h2>
        <ul className="ingredients">
          <li>
            { recipe.strIngredient1 } : { recipe.strMeasure1 }
          </li>
          <li>
            { recipe.strIngredient2 } : { recipe.strMeasure2 }
          </li>
          <li>
            { recipe.strIngredient3 } : { recipe.strMeasure3 }
          </li>
          <li>
            { recipe.strIngredient4 } : { recipe.strMeasure4 }
          </li>
          <li>
            { recipe.strIngredient5 } : { recipe.strMeasure5 }
          </li>
          <li>
            { recipe.strIngredient6 } : { recipe.strMeasure6 }
          </li>
          <li>
            { recipe.strIngredient7 } : { recipe.strMeasure7 }
          </li>
          <li>
            { recipe.strIngredient8 } : { recipe.strMeasure8 }
          </li>
        </ul>
        <h2>Instructions</h2>
        <p className="process">
          { recipe.strInstructions }
        </p>
      </div>
      <Link to="/" className="text-center">
        <button type="button">Back to Recipe</button>
      </Link>
    </div>  
    );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({}).isRequired,
  getRecipe: PropTypes.func.isRequired,
};

const mapStateToProp = state => ({
  recipe: state.recipe,
});

export default connect(mapStateToProp, { getRecipe })(Recipe);