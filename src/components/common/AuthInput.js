import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
const styles = {
  InputContainerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  InputStyles: {
    borderBottomWidth: 2,
    borderColor: '#fff',
    textAlign: 'center',
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 8,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 23,
    flex: 2
  }

}
const AuthInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

  return (
    <View style={styles.InputContainerStyle}>
      <TextInput
        autoCapitalize="none"
        placeholderTextColor="#fff"
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.InputStyles}
      />
    </View>
  );
};

export { AuthInput };
