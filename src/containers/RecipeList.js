import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipes, changeCategories } from '../redux/actions';
import Recipe from '../components/Recipe';
import CategoryFilter from '../components/CategoryFilter';
import { Link } from 'react-router-dom';

import { FilterWrap, RecipeWrap }  from '../styles/RecipeListStyle';
// import RecipeWrap from '../styles/RecipeListStyle';
import { GET_RECIPES } from '../constants/actionTypes';


const RecipeList = ({
    getRecipes, recipes, changeCategories,
}) => {
    useEffect(() => {
        getRecipes();
    }, [getRecipes]);


    const handleFilterChange = value => ( value === 'All' ?
    getRecipes() : changeCategories(value));


    return recipes.length === 0 ? <h1>Loading......</h1> : (
        <FilterWrap>
            Filter by Catorgory<CategoryFilter handleChange={handleFilterChange()} />

            <RecipeWrap>
              { recipes.map(recipe => (
                <Link key={recipe.idMeal} to={{pathname: `/recipe/${recipe.idMeal}`, state: recipe }}>
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
    changeCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    recipes: state.recipe.recipes,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(getRecipes()),
  changeCategories: category => dispatch(changeCategories(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);