import axios from 'axios';
import categories from './allCategories';

const getRecipes = () => dispatch => {
  const categoriesResult = [];

  // eslint-disable-next-line
  categories.map(category => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => {
        categoriesResult.push(...res.data.meals);
        // console.log(categoriesResult[0]);
      })
      .then(() => {
        dispatch({
          type: 'GET_RECIPES',
          payload: categoriesResult,
        });
      });
  });
};

const getRecipe = id => dispatch => {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => dispatch({
      type: 'GET_RECIPE',
      payload: response.data.meals[0],
    }));
};


const changeCategories = category => async dispatch => {
  const data = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );
  dispatch({
    type: 'FILTER BY CATEGORY',
    payload: data,
  });
};


export {
  getRecipes, getRecipe, changeCategories,
};