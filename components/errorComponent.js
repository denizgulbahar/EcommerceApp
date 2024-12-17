import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorComponent = ({ message = 'Something went wrong', style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffcccc',
    borderRadius: 8,
    borderColor: '#ff6666',
    borderWidth: 1,
    margin: 16,
  },
  text: {
    color: '#990000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ErrorComponent;
