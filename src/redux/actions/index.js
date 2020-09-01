import axios from 'axios';
import categories from './allCategories';
import {
  CHANGE_FILTER, GET_RECIPES, GET_RECIPE, CHANGE_CATEGORIES,
} from '../../constants/actionTypes';

const GETRECIPES = () => dispatch => {
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
      })
      .then(error => error);
  });
};

const GETRECIPE = id => async dispatch => {
  await axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => dispatch({
      type: GET_RECIPE,
      payload: response.data.meals[0],
    }))
    .then(error => error);
};

const FILTERRECIPES = category => async dispatch => {
  const data = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  dispatch({
    type: CHANGE_CATEGORIES,
    payload: data,
  });
};

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export {
  GETRECIPES, GETRECIPE, FILTERRECIPES, changeFilter,
};
