import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-fa-icons';

const styles = StyleSheet.create({
  SearchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'flex-end',
    marginLeft: 130,
  },
  SearchIcon: {
    color: '#fff',
    width: 20
  },
  SearchInput: {
    height: 50,
    color: '#fff',
    flex: 1,
    fontSize: 18
  }
});

const SearchInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.SearchWrapper}>
      <Icon style={styles.SearchIcon} name="search" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        placeholderTextColor="#fff"
        value={value}
        onChangeText={onChangeText}
        style={styles.SearchInput}
      />
    </View>
  );
};

export { SearchInput };
