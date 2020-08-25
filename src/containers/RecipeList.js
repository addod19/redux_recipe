import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipes, changeFilter } from '../redux/actions';
import Recipe from '../components/Recipe';
import CategoryFilter from '../components/CategoryFilter';


const RecipeList = ({
    getRecipes, recipes, changeFilter, filter
}) => {
    useEffect(() => {
        getRecipes();
    }, []);

    const handleFilterChange = e => {
        const { value } = e.target;
        changeFilter(value);
    };

    const FilteredRecipes = () => (filter = 'All' ? recipes : recipes.filter(recipe => {
        const recipeTypes = recipe.types;

        for (let i = 0; i < recipeTypes.length; i++) {
            if (recipeTypes[i].type.name === filter) return true;
        }
        return false;
    }));

    return recipes === null ? <h1>Loading......</h1> : (
        <div>
            <CategoryFilter handleChange={handleFilterChange} />
            {FilteredRecipes().map(recipe => (
               <Recipe key={recipe.id} recipe={recipe} /> 
            ))}
        </div>
    );
};

RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired,
    getRecipes: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    recipes: state.recipe.recipes,
    filter: state.filter
});

export default connect(mapStateToProps, {getRecipes, changeFilter})(RecipeList);