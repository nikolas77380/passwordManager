import _ from 'lodash';
import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { getItems, searchSite } from '../actions';
import { Spinner } from './common';
import SingleItem from './SingleItem';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingTop: 65
  }
});

class ItemList extends Component {

  componentWillMount() {
    this.props.getItems();
  }

  keyExtractor = (item) => item.uid;

  renderItem({ item }) {
    return (
      <SingleItem item={item} />
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
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <View style={{ paddingBottom: 5, flex: 1 }}>
          {this.renderList()}
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  const items = _.map(state.items.items, (val, uid) => {
        return { ...val, uid };
  });
  const searchText = state.search.searchText;
  if (searchText) {
    const filteredItems = _.filter(
                             items, item => item.site.toLowerCase()
                             .includes(searchText.toLowerCase())
                           );
    return { items: filteredItems, searchText: state.search.searchText };
  }
  return { items, loading: state.items.loading };
};

export default connect(mapStateToProps, { getItems, searchSite })(ItemList);
