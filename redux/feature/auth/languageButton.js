import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../store/slices/authSlice'; 
import { color } from "../../../styles/color";
import ButtonOriginal from "../../../components/buttons/buttonOriginal";
import i18next from "../../../services/i18next";

const LanguageButton = ({ viewStyle }) => {
    const reduxLanguage = useSelector(state => state.auth.language); // Get language from Redux
    const dispatch = useDispatch();
    
    const [localLanguage, setLocalLanguage] = useState(reduxLanguage); // Local state for immediate update

    const images = {
        tr: require('../../../assets/language/tr.png'),
        en: require('../../../assets/language/eng.png')
    };

    const toggleLanguage = () => {
        const newLanguage = localLanguage === 'tr' ? 'en' : 'tr';
        setLocalLanguage(newLanguage); // Immediate update
        i18next.changeLanguage(newLanguage).then(() => {
            dispatch(setLanguage(newLanguage)); // Sync Redux state
        });
    };

    return (
        <View style={[styles.ButtonsView, viewStyle]}>
            <ButtonOriginal buttonStyle={styles.languageButton} onPress={toggleLanguage}>
                <Image
                    source={images[localLanguage]}
                    resizeMode="cover"
                    style={styles.languageImage}
                />
            </ButtonOriginal>
        </View>
    );
};

const styles = StyleSheet.create({
    ButtonsView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: -10, 
        right: 10,
        paddingHorizontal: 3,
        paddingVertical: 1.2,
        borderColor: color.white,
    },
    languageButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    languageImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }
});

export default LanguageButton;
