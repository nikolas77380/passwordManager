import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-fa-icons';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { itemDelete } from '../actions';
import { Confirm } from './common';

class ListItem extends Component {
  state = {
    ConfirmVisible: false
  }
  onEditPress() {
    Actions.ItemEdit({ site: this.props.item });
  }

  onRemovePress() {
    this.setState({ ConfirmVisible: true });
  }

  acceptRemove() {
    const { uid } = this.props.item;
    console.log(uid);
    this.props.itemDelete({ uid });
    this.setState({ ConfirmVisible: false });
  }

  declineConfirm() {
    this.setState({ ConfirmVisible: false });
  }

  render() {
    const { site, login, sitePassword } = this.props.item;
    return (
      <View style={styles.itemListStyle}>
      <View style={styles.fixedLeft}>
        <TouchableOpacity onPress={this.onRemovePress.bind(this)}>
            <Text style={styles.itemTextStyle}>
              <Icon style={{ alignSelf: 'flex-end', color: '#fff' }} name="trash" />
            </Text>
        </TouchableOpacity>
      </View>
        <View style={styles.flexOne}>
          <TouchableOpacity
            onPress={() => {
            Alert.alert(
              site,
              `\n Login: ${login} \n Password: ${sitePassword}`
              );
            }
          }
          >
              <Text style={styles.itemTextStyle}>
                {site}
              </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fixedRight}>
          <TouchableOpacity onPress={this.onEditPress.bind(this)}>
              <Text style={styles.itemTextStyle}>
                <Icon style={{ alignSelf: 'flex-end' }} name="chevron-right" />
              </Text>
          </TouchableOpacity>
        </View>
        <Confirm
          visible={this.state.ConfirmVisible}
          onAccept={this.acceptRemove.bind(this)}
          onDecline={this.declineConfirm.bind(this)}
        >
        Are you sure you want delete {site} information?
        </Confirm>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemListStyle: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.4,
    elevation: 2,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  },
  itemTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#6495ED'
  },
  fixedRight: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 25,
    borderLeftWidth: 1,
    borderColor: '#6495ED'
  },
  fixedLeft: {
    paddingTop: 20,
    paddingBottom: 20,
    width: 25,
    borderRightWidth: 1,
    borderColor: '#ff0000',
    backgroundColor: '#ff0000',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  flexOne: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1
  }
});
export default connect(null, { itemDelete })(ListItem);
