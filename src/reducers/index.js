import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ItemReducer from './ItemReducer';
import ItemListReducer from './ItemListReducer';

export default combineReducers({
    auth: AuthReducer,
    itemForm: ItemReducer,
    items: ItemListReducer
});
