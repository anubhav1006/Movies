import * as action from '../actionTypes/movies';
import * as api from '../api/movies';

export default function getMoviesUsingString(payload) {
  return (dispatch) => {
    dispatch({type: action.GET_MOVIES_LOAD});
    return api
      .getMoviesUsingString(payload)
      .then((data) => {
        dispatch({
          type: action.GET_MOVIES_SUCCESS,
          payload: data.Search,
        });
      })
      .catch((error) =>
        dispatch({
          type: action.GET_MOVIES_FAIL,
          payload: error,
        }),
      );
  };
}
