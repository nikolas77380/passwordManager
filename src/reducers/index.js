import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ItemReducer from './ItemReducer';
import ItemListReducer from './ItemListReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
    auth: AuthReducer,
    formFields: ItemReducer,
    items: ItemListReducer,
    search: SearchReducer
});
