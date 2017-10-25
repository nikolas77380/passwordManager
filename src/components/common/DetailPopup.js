import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';
import { BlueButton } from './BlueButton';

const styles = StyleSheet.create({
  DetailPopupContainer: {
    backgroundColor: '#F2F2F2',
    position: 'absolute',
    top: 150,
    left: 5,
    right: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    borderRadius: 15,
    shadowOffset: { height: 15, width: 15 },
    shadowOpacity: 0.4,
    elevation: 2,
    height: 250,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 10,
  },
  text: {
    textAlign: 'left',
    fontSize: 18,
    color: '#4c669f',
    fontWeight: '400'
  }
});

const DetailPopup = ({site, login, sitePassword, visible, onEdit, onDecline }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}} // required for android
    >
    <View style={styles.DetailPopupContainer}>
      <CardSection>
        <Text style={styles.text}>
        Site : {site}
        </Text>
      </CardSection>
      <CardSection>
        <Text style={styles.text}>
        Your Login : {login}
        </Text>
      </CardSection>
      <CardSection>
        <Text style={styles.text}>
        Your Password: {sitePassword}
        </Text>
      </CardSection>
      <CardSection style={styles.bottomSection} >
        <BlueButton onPress={onEdit}>Edit</BlueButton>
        <BlueButton onPress={onDecline}>Close</BlueButton>
      </CardSection>
    </View>
    </Modal>
  );
};

export { DetailPopup };
