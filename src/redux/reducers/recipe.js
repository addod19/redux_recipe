import { GET_RECIPES, GET_RECIPE } from '../../constants/actionTypes';

const initialState = {
  recipes: [],
  recipe: {},
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
