import axios from 'axios';
import categories from './allCategories';
import { CHANGE_FILTER, GET_RECIPES, GET_RECIPE, CHANGE_CATEGORIES } from '../../constants/actionTypes';

const getRecipes = () => dispatch => {
  const categoriesResult = [];

  // eslint-disable-next-line
  categories.map(category => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => {
        console.log(res);
        categoriesResult.push(...res.data.meals);
        console.log(res);
      })
      .then(() => {
        dispatch({
          type: GET_RECIPES,
          payload: categoriesResult,
        });
      })
      .then(error => error);
  });
};

const getRecipe = id => dispatch => {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => dispatch({
      type: GET_RECIPE,
      payload: response.data.meals[0],
    }))
    .then(error => error);
};


const changeCategories = category => async dispatch => {
  const data = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  dispatch({
    type: CHANGE_CATEGORIES,
    payload: data,
  });
};

const changeFIlter = filter => ({
  type: CHANGE_FILTER,
  filter,
});


export {
  getRecipes, getRecipe, changeCategories, changeFIlter
};