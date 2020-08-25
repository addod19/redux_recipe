import { combineReducers } from 'redux';
import recipe from './recipe';
import filter from './filter';

export default combineReducers({ recipe, filter });