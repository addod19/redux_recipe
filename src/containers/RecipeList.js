import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GETRECIPES, FILTERRECIPES, changeFilter } from '../redux/actions';

import ReWrap from './RecipeWrap';
import CategoryFilter from '../components/CategoryFilter';

import { FilterWrap, RecipeWrap } from '../styles/RecipeListStyle';

const RecipeList = ({
  getRecipes, recipes, changeCategories, changeFilter,
}) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const handleFilterChange = value => {
    if (value === 'All') {
      getRecipes();
    } else {
      changeFilter(value);
      changeCategories(value);
    }
  };

  return recipes.length === 0 ? <h1>Loading......</h1> : (
    <FilterWrap>
      Filter by Catorgory
      <CategoryFilter handleChange={handleFilterChange} />
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
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  recipes: state.recipe.recipes,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(GETRECIPES()),
  changeCategories: category => dispatch(FILTERRECIPES(category)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
