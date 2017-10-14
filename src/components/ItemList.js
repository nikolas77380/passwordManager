import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getItems } from '../actions';
import ListItem from './ListItem';
class ItemList extends Component {

  componentWillMount() {
    this.props.getItems();
  }

  _renderItem = ({item}) => (
    <ListItem item={item} />
  );

  _keyExtractor = (item, index) => item.uid;

  render() {
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={this.props.items}
        renderItem={ this._renderItem }
      />
    )
  }
}

const mapStateToProps = state => {
  const items = _.map(state.items, (val, uid) => {
    return { ...val, uid }
  });
  return { items };
};

export default connect(mapStateToProps, { getItems })(ItemList);
