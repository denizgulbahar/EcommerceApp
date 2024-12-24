import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { MyAccountContainer } from '../../../components/containers/MyAccountContainer';
import ButtonOriginal from '../../../components/buttons/buttonOriginal';
import { ScreenWrapper } from '../../../components/wrappers/screenWrapper';
import { Header } from '../../../components/header/header';
import { useSelector } from 'react-redux';

const PersonalInformationScreen = ({ navigation }) => {
    const user = useSelector((state) => state.auth.user)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    console.log("user:",user)

    const [accountInputs, setAccountInputs] = useState({
        name: user.name,
        surname: user.surname,
        password: user.password,
        email: user.email,
        telNo: user.telNo,
    });
    useEffect(() => {
        if (user) {
            setAccountInputs((prev) => ({
                ...prev,
                name:user.name,
                surname: user.surname,
                password: user.password,
                telNo: user.telNo,
                email: user.email,
            }))
        }
    },[isLoggedIn])

    const handleLogout = async () => {
        navigation.navigate("client-login")
        // userDispatch({ type: 'LOG_OUT' });
    };
    function handleUpdate() {
        Alert.alert("güncellendi.")
    }
    function handleDelete() {
        Alert.alert("hesap silindi.")
    }
    return (
        <ScreenWrapper>
            <Header text="Kişisel Bilgilerim" />
            <MyAccountContainer accountInputs={accountInputs} setAccountInputs={setAccountInputs}/>
            <View style={styles.buttonView}>
                <ButtonOriginal 
                    buttonStyle={{ 
                        backgroundColor: "transparent", 
                        shadowOpacity: 0, 
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
                        backgroundColor: "transparent", 
                        shadowOpacity: 0, 
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