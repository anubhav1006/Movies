import {combineReducers} from 'redux';
import movies from './movies';
import favourites from './favourites';

const reducers = {
  movies,
  favourites,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
