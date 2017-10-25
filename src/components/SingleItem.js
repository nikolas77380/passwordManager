import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipe-out';
import { itemDelete } from '../actions';
import { Confirm, DetailPopup } from './common';

const styles = StyleSheet.create({
  itemListStyle: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.4,
    elevation: 2,
    margin: 5

  },
  itemTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#4c669f'
  },
  flexOne: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
  }
});

class SingleItem extends Component {
  state = {
    ConfirmVisible: false,
    DetailPopupVisible: false,
  }

  onEditPress() {
    this.setState({ DetailPopupVisible: false });
    Actions.ItemEdit({ site: this.props.item });
  }

  onRemovePress() {
    this.setState({ ConfirmVisible: true });
  }

  showDetailedPopup() {
    this.setState({ DetailPopupVisible: true });
  }

  acceptRemove() {
    const { uid } = this.props.item;
    this.props.itemDelete({ uid });
    this.setState({ ConfirmVisible: false });
  }

  declineConfirm() {
    this.setState({ ConfirmVisible: false });
  }

  closePopup() {
    this.setState({ DetailPopupVisible: false });
  }

  render() {
    const { site, login, sitePassword } = this.props.item;
    const swipeoutBtns = [
      {
        text: 'Edit',
        backgroundColor: '#3b5998',
        onPress: () => { Actions.ItemEdit({ site: this.props.item }); }
      },
      {
        text: 'Delete',
        backgroundColor: '#8b0000',
        onPress: () => { this.setState({ ConfirmVisible: true }); }
      }

    ];
    return (
      <View style={styles.itemListStyle}>
        <Swipeout
            autoClose
            right={swipeoutBtns}
            backgroundColor="transparent"
            style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
        >
          <View style={styles.flexOne}>
            <TouchableOpacity
              onPress={this.showDetailedPopup.bind(this)}
            >
                <Text style={styles.itemTextStyle}>
                  {site}
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

          <DetailPopup
            visible={this.state.DetailPopupVisible}
            onEdit={this.onEditPress.bind(this)}
            onDecline={this.closePopup.bind(this)}
            site={site}
            login={login}
            sitePassword={sitePassword}
          />

        </Swipeout>
      </View>
    );
  }
}

export default connect(null, { itemDelete })(SingleItem);
