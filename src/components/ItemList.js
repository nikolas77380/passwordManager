import _ from 'lodash';
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getItems, searchSite } from '../actions';
import { SearchInput, Spinner } from './common';
import ListItem from './ListItem';

class ItemList extends Component {

  componentWillMount() {
    this.props.getItems();
  }

  onSearchChange(text) {
    this.props.searchSite(text);
  }

  keyExtractor = (item) => item.uid;

  renderItem({ item }) {
    return (
      <ListItem item={item} />
    );
  }

  renderList() {
    if (this.props.loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
              <Spinner size="large" />
            </View>
        );
    }
    return (
      <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.items}
          extraData={this.state}
          renderItem={this.renderItem}
      />
      );
  }

  render() {
    return (
      <View style={{ paddingBottom: 60 }}>
        <SearchInput value={this.props.searchText} onChangeText={this.onSearchChange.bind(this)} />
        {this.renderList()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const items = _.map(state.items.items, (val, uid) => {
        return { ...val, uid }
  });
  const searchText = state.search.searchText;
  if (searchText) {
const filteredItems = _.filter(items, item => item.site.toLowerCase().includes(searchText.toLowerCase()));
    return { items: filteredItems, searchText: state.search.searchText }
  }
  return { items, searchText: state.search.searchText, loading: state.items.loading };
};

export default connect(mapStateToProps, { getItems, searchSite })(ItemList);
