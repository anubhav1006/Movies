import * as action from '../actionTypes/favourites';

const initialState = {
  favouriteMovies: [],
};

const favourite = (state = initialState, {type, payload}) => {
  //   console.log(state);
  switch (type) {
    case action.ADD_TO_FAVOURITES:
      return {
        ...state,
        favouriteMovies: state.favouriteMovies.concat(payload.movie),
      };

    case action.REMOVE_FROM_FAVOURITES: {
      return {
        ...state,
        favouriteMovies: state.favouriteMovies.filter(
          (item, index) => item !== payload.movie,
        ),
      };
    }

    default:
      return state;
  }
};

export default favourite;
