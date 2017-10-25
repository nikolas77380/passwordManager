import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-fa-icons';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ItemList from './components/ItemList';
import ItemCreate from './components/ItemCreate';
import ItemEdit from './components/ItemEdit';
import SearchComponent from './components/SearchComponent';

const styles = StyleSheet.create({
    navigationBarStyle: {
      backgroundColor: 'transparent',
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
    },
    iconStyle: {
      fontSize: 22,
    }
});

class RouterComponent extends Component {

   render() {
     return (

       <Router sceneStyle={styles.routerStyle}>
           <Scene key="auth" hideNavBar={1} >
             <Scene
               key="login"
               component={LoginForm}
               title="Please Login"
               initial
             />
             <Scene
               key="Registration"
               component={RegistrationForm}
               title="Please Register"
             />
           </Scene>

           <Scene key="main">
             <Scene
               navigationBarStyle={styles.navigationBarStyle}
               titleStyle={styles.navigationTitleStyle}
               leftButtonTextStyle={styles.whiteText}
               rightButtonTextStyle={styles.whiteText}
               key="ItemList"
               title={<SearchComponent />}
               component={ItemList}
               rightTitle={<Icon name="plus" style={styles.iconStyle} />}
               leftTitle={<Icon name="sign-out" style={styles.iconStyle} />}
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
   }

}

export default RouterComponent;
