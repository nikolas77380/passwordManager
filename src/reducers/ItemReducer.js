import { ITEM_UPDATE, ITEM_CREATE, ITEM_SAVING } from '../actions/types';

const INITIAL_STATE = {
  site: '',
  login: '',
  sitePassword: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case ITEM_CREATE:
      return INITIAL_STATE;
    case ITEM_SAVING :
      return INITIAL_STATE;
    default:
      return state;
  }
};
