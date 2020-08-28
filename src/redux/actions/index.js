import axios from 'axios';
import categories from './allCategories';
// import {
//   CHANGE_FILTER, GET_RECIPES, GET_RECIPE, CHANGE_CATEGORIES,
// } from '../../constants/actionTypes';

const GET_RECIPES = () => dispatch => {
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
          type: 'GET RECIPES',
          payload: categoriesResult,
        });
      })
      .then(error => error);
  });
};

const GET_RECIPE = id => dispatch => {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => dispatch({
      type: 'GET RECIPE',
      payload: response.data.meals[0],
    }))
    .then(error => error);
};

const FILTER_RECIPES = category => async dispatch => {
  const data = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  dispatch({
    type: 'CHANGE CATEGORIES',
    payload: data,
  });
};

const changeFIlter = filter => ({
  type: 'CHANGE FILTER',
  filter,
});

export {
  GET_RECIPES, GET_RECIPE, FILTER_RECIPES, changeFIlter,
};
