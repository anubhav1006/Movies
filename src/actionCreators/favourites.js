import * as action from '../actionTypes/favourites';

export function addToFavourites(payload) {
  //   console.log(payload);
  return (dispatch) => {
    dispatch({
      type: action.ADD_TO_FAVOURITES,
      payload: payload,
    });
  };
}

export function removeFromFavourites(payload) {
  return (dispatch) => {
    dispatch({
      type: action.REMOVE_FROM_FAVOURITES,
      payload: payload,
    });
  };
}
