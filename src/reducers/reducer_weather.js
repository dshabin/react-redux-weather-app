import { FETCH_WEATHER } from '../actions/app'


export default function (state = [] , action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat(action.payload.data);
  }

  return state;
}
