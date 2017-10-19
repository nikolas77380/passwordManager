import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { ITEM_UPDATE,
         ITEM_CREATE,
         ITEMS_FETCH_SUCCESS,
         ITEM_SAVING,
         SEARCH_UPDATE,
         LOADING } from './types';


export const itemUpdate = ({ prop, value }) => {
    return {
      type: ITEM_UPDATE,
      payload: { prop, value }
    };
};

export const itemCreation = ({ site, login, sitePassword }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/sites`).push({ site, login, sitePassword })
      .then(() => {
        dispatch({ type: ITEM_CREATE });
        Actions.ItemList({ type: 'reset' });
      });
  };
};

export const itemSaving = ({ site, login, sitePassword, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/sites/${uid}`)
    .set({ site, login, sitePassword })
        .then(() => {
          dispatch({ type: ITEM_SAVING });
          Actions.ItemList({ type: 'reset' });
        });
  };
};

export const itemDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/sites/${uid}`).remove()
    .then(() => {
      Actions.ItemList();
    });
  };
};

export const getItems = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
      dispatch({ type: LOADING });
      firebase.database().ref(`/users/${currentUser.uid}/sites`)
      .on('value', snapshot => {
        dispatch({ type: ITEMS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const searchSite = (text) => {
    return {
      type: SEARCH_UPDATE,
      payload: text
    };
};
