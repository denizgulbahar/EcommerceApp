import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, 
  KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { IconButton, Portal } from 'react-native-paper';
import { color } from '../../styles/color';
import ButtonOriginal from '../buttons/buttonOriginal';

const Modal = ({ visible, onClose, children }) => {
  if (!visible) return false;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
      enabled={true}
      style={styles.container}
    >
      <Portal>
          <TouchableOpacity style={{ flex: 1 }} activeOpacity={1}
            onPress={onClose}>
            <View style={styles.overlay}>
              <ScrollView style={styles.modal} contentContainerStyle={{ flexGrow: 1 }}>
                <TouchableOpacity style={{ flex: 1 }}  activeOpacity={1} onPress={() => {}}>
                  <IconButton
                      icon="close-circle"
                      style={{alignSelf:"flex-end"}}
                      iconColor={color.danger}
                      size={40}
                      onPress={onClose}
                  />
                  {children}
                </TouchableOpacity>
                <ButtonOriginal 
                  buttonStyle={{ 
                    backgroundColor: color.mainColor, 
                    marginVertical: 10 
                  }} 
                  title="Kaydet" 
                  onPress={() => Alert.alert("Adres kaydedildi.")} 
                />
              </ScrollView>
            </View>
          </TouchableOpacity>
      </Portal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    backgroundColor: color.mainColor,
    paddingHorizontal: 10,
  },
  modal: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  }
});

export default Modal;


