import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useUserContext } from '../../../contexts/UserContext';
import { MyAccountContainer } from '../../../components/containers/MyAccountContainer';
import ButtonOriginal from '../../../components/buttons/buttonOriginal';
import { ScreenWrapper } from '../../../components/wrappers/screenWrapper';
import { Header } from '../../../components/header/header';
import { color } from '../../../styles/color';
const PersonalInformationScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [balance, setBalance] = useState('Yükleniyor...');
    // useEffect(() => {
    //     setLoading(true)
    //     fetchBalance({setLoading,setBalance,userState});
    // }, [userState])
    const { userState, userDispatch } = useUserContext();
    const [accountInputs, setAccountInputs] = useState({
        name: '',
        surname: '',
        password: '',
        email: '',
        telNo: '',
    });
    useEffect(() => {
        if (userState.user) {
            setAccountInputs((prev) => ({
                ...prev,
                name:userState.user.name,
                surname: userState.user.lastname,
                password: userState.user.password,
                telNo: userState.user.phone,
                email: userState.user.email,
            }))
        }
    },[userState.isLoggedIn])

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