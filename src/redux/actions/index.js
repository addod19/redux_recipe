import axios from 'axios';
import categories from './allCategories';
import { GET_RECIPES, GET_RECIPE, CHANGE_FILTER } from '../constants/actionTypes';

const getRecipes = () => dispatch => {
  const categoriesResult = [];

  // eslint-disable-next-line
  categories.map(category => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => {
        categoriesResult.push(...res.data.meals);
      })
      .then(() => {
        dispatch({
          type: GET_RECIPES,
          payload: categoriesResult,
        });
      });
  });
};

const getRecipe = id => dispatch => {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => dispatch({
      type: GET_RECIPE,
      payload: response.data.meals[0],
    }));
};


const changeCategories = category => async dispatch => {
  const data = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  dispatch({
    type: CHANGE_FILTER,
    payload: data,
  });
};

export const setLoading = () => ({
  type: 'LOADING',
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export {
  getRecipes, getRecipe, changeFilter, changeCategories,
};