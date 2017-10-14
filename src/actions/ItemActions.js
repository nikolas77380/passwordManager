import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { ITEM_UPDATE, ITEM_CREATE, ITEMS_FETCH_SUCCESS } from './types';


export const itemUpdate = ({ prop, value}) => {
    return {
      type: ITEM_UPDATE,
      payload: { prop, value }
    };
};

export const itemCreation = ({ site, login, site_password }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/sites`).push({site, login, site_password})
      .then(() => {
        dispatch({ type: ITEM_CREATE });
        Actions.ItemList({ type: 'reset' })
      });
  };
};

export const getItems = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/sites`)
      .on('value', snapshot => {
        dispatch({ type:ITEMS_FETCH_SUCCESS, payload: snapshot.val() })
      })
  }
}
