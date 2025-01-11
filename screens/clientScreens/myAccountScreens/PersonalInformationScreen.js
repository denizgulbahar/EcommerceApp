import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { MyAccountContainer } from '../../../redux/feature/auth/MyAccountContainer';
import ButtonOriginal from '../../../components/buttons/buttonOriginal';
import { ScreenWrapper } from '../../../components/wrappers/screenWrapper';
import { Header } from '../../../components/header/header';
import { BackButton } from '../../../components/buttons/backButton';
import { useTranslation } from 'react-i18next';

const PersonalInformationScreen = ({ navigation }) => {
    
    const { t } = useTranslation()
    function handleUpdate() {
        Alert.alert(t("infoUpdated"))
    }
    function handleDelete() {
        Alert.alert(t("accountDeleted"))
    }
    return (
        <ScreenWrapper>
            <BackButton navigation={navigation} />
            <Header text={t("personalInformations")} />
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
                    title={t("updateInfo")}
                    onPress={handleUpdate} 
                />
                <ButtonOriginal 
                    buttonStyle={{ paddingVertical: 7 }} 
                    textStyle={{ 
                        fontSize: 15, 
                        fontStyle: "normal", 
                        fontWeight: "bold" 
                    }} 
                    title={t("deleteAccount")}
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