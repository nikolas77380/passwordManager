import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ItemList from './components/ItemList';
import ItemCreate from './components/ItemCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65, backgroundColor:'#6495ED' }}>
        <Scene key="auth" hideNavBar={true}>
          <Scene key="login" component={LoginForm} title="Please Login" initial/>
        </Scene>

        <Scene key="main">
          <Scene
            key="ItemList"
            component={ItemList}
            title="Item List"
            rightTitle="Add"
            onRight={() => Actions.ItemCreate()}
            initial
          />
          <Scene key="ItemCreate" component={ItemCreate} title="New Item" />
        </Scene>
    </Router>
  );
};

export default RouterComponent;
