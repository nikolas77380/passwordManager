import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ItemList from './components/ItemList';
import ItemCreate from './components/ItemCreate';
import ItemEdit from './components/ItemEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.routerStyle}>
        <Scene key="auth" hideNavBar={1} >
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial

          />
        </Scene>

        <Scene key="main">
          <Scene
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.navigationTitleStyle}
            leftButtonTextStyle={styles.whiteText}
            rightButtonTextStyle={styles.whiteText}
            key="ItemList"
            component={ItemList}
            title="My sites"
            rightTitle="Add"
            leftTitle="Log Out"
            onRight={() => Actions.ItemCreate()}
            onLeft={() => Actions.auth({ type: 'reset' })}
            initial
          />
          <Scene
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.navigationTitleStyle}
            backTitle="My Sites"
            backButtonTextStyle={styles.whiteText}
            key="ItemCreate"
            component={ItemCreate}
            title="Add new Site"
          />
          <Scene
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.navigationTitleStyle}
            backTitle="My Sites"
            backButtonTextStyle={styles.whiteText}
            key="ItemEdit"
            component={ItemEdit}
            title="Edit Site"
          />
        </Scene>

    </Router>
  );
};

const styles = StyleSheet.create({
    routerStyle: {
      paddingTop: 65,
      backgroundColor: '#6495ED',
    },
    navigationBarStyle: {
      backgroundColor: '#6495ED',
      marginBottom: 10,
      padding: 5
    },
    navigationTitleStyle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '400'
    },
    whiteText: {
      color: '#fff'
    }
});

export default RouterComponent;
