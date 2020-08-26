import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecipes, changeCategories } from '../redux/actions';
import Recipe from '../components/Recipe';
import CategoryFilter from '../components/CategoryFilter';

import { FilterWrap, RecipeWrap } from '../styles/RecipeListStyle';

const RecipeList = ({
  getRecipes, recipes, changeCategories, filter,
}) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const handleFilterChange = value => (value === 'All'
    ? getRecipes() : changeCategories(value));

  return recipes.length === 0 ? <h1>Loading......</h1> : (
    <FilterWrap>
      Filter by Catorgory
      <CategoryFilter handleChange={handleFilterChange()} />

      <RecipeWrap>
        { recipes.map(recipe => (
          <Link key={recipe.idMeal} to={{ pathname: `/recipe/${recipe.idMeal}`, state: recipe }} className="cot">
            <Recipe key={recipe.idMeal} recipe={recipe} />
          </Link>
        ))}
      </RecipeWrap>
    </FilterWrap>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  getRecipes: PropTypes.func.isRequired,
  changeCategories: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  recipes: state.recipe.recipes,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(getRecipes()),
  changeCategories: category => dispatch(changeCategories(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
