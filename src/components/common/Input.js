import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const styles = {
  InputContainerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#fff'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    color: '#fff',
    backgroundColor: 'transparent',
  },
  InputStyles: {
    color: '#fff',
    backgroundColor: 'transparent',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }

};

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.InputContainerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.InputStyles}
      />
    </View>
  );
};

export { Input };
