import { ITEM_UPDATE, ITEM_CREATION, ITEMS_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  site: '',
  login: '',
  site_password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ITEM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case ITEM_CREATION:
      return INITIAL_STATE;
    case ITEMS_FETCH_SUCCESS:
    // console.log(action);
      return action.payload;
    default:
      return state;
  }

}
