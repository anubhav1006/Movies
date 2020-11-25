import axios from 'axios';
import * as urlUtil from '../constants/constant';

export function getMoviesUsingString(payload) {
  const URL = `${urlUtil.omdbUrl}${urlUtil.paramStart}${urlUtil.type}${urlUtil.movieParam}${urlUtil.and}${urlUtil.apiKey}${urlUtil.apiKeyVal}${urlUtil.and}${urlUtil.string}${payload.string}`;
  //   console.log(URL);
  return axios
    .get(URL, {})
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
}
