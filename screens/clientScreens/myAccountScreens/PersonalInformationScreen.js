import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { MyAccountContainer } from '../../../redux/feature/auth/MyAccountContainer';
import ButtonOriginal from '../../../components/buttons/buttonOriginal';
import { ScreenWrapper } from '../../../components/wrappers/screenWrapper';
import { Header } from '../../../components/header/header';
import { BackButton } from '../../../components/buttons/backButton';

const PersonalInformationScreen = ({ navigation }) => {
    
    function handleUpdate() {
        Alert.alert("güncellendi.")
    }
    function handleDelete() {
        Alert.alert("hesap silindi.")
    }
    return (
        <ScreenWrapper>
            <BackButton navigation={navigation} />
            <Header text="Kişisel Bilgilerim" />
            <MyAccountContainer />
            <View style={styles.buttonView}>
                <ButtonOriginal 
                    buttonStyle={{ 
                        paddingVertical: 7 
                    }} 
                    textStyle={{ 
                        fontSize: 17, 
                        fontStyle: "normal", 
                        fontWeight: "bold",
                    }} 
                    title="Bilgileri Güncelle" 
                    onPress={handleUpdate} 
                />
                <ButtonOriginal 
                    buttonStyle={{ 
                        paddingVertical: 7 
                    }} 
                    textStyle={{ 
                        fontSize: 15, 
                        fontStyle: "normal", 
                        fontWeight: "bold" 
                    }} 
                    title="Hesabı Sil"
                    onPress={handleDelete} 
                />
            </View>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    buttonView: {
        flex: 1, 
        flexDirection: "column", 
        alignItems: "center",
        marginVertical: 30
    }
})
export default PersonalInformationScreen