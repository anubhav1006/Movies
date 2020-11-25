import * as action from '../actionTypes/movies';

const initialState = {
  movies: [],
  //isMoviesLoaded: false,
  isMoviesLoading: false,
};

const movies = (state = initialState, {type, payload}) => {
  switch (type) {
    case action.GET_MOVIES_LOAD:
      return {...state, isMoviesLoading: true};
    case action.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload,
        isMoviesLoading: false,
      };
    case action.GET_MOVIES_FAIL:
      return {...state, error: payload, isMoviesLoading: false};
    default:
      return state;
  }
};

export default movies;
