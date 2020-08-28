import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GET_RECIPES, FILTER_RECIPES } from '../redux/actions';

import ReWrap from '../containers/RecipeWrap';
import CategoryFilter from '../components/CategoryFilter';

import { FilterWrap, RecipeWrap } from '../styles/RecipeListStyle';

const RecipeList = ({
  getRecipes, recipes, changeCategories,
}) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const handleFilterChange = value => (value === 'All'
    ? getRecipes() : changeCategories(value));

  return recipes.length === 0 ? <h1>Loading......</h1> : (
    <FilterWrap>
      Filter by Catorgory
      <CategoryFilter handleChange={ handleFilterChange } />
      <RecipeWrap>
        { recipes.map(recipe => (
          <Link key={recipe.idMeal} to={{ pathname: `/${recipe.idMeal}`, state: recipe }} className="cot">
            <ReWrap key={recipe.idMeal} recipe={recipe} />
          </Link>
        ))} 
      </RecipeWrap>
    </FilterWrap>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRecipes: PropTypes.func.isRequired,
  changeCategories: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  recipes: state.recipe.recipes,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(GET_RECIPES()),
  changeCategories: category => dispatch(FILTER_RECIPES(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
