import { ITEMS_FETCH_SUCCESS, LOADING } from '../actions/types';

const INITIAL_STATE = { loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEMS_FETCH_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
