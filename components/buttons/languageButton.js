import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/store/slices/authSlice'; 
import { color } from "../../styles/color";
import ButtonOriginal from "./buttonOriginal";
import i18next from "../../services/i18next";
const LanguageButton = () => {
    const [showSecondButton, setShowSecondButton] = useState(false);
    
    // Access current language from Redux store
    const currentLanguage = useSelector(state => state.auth.language);
    const dispatch = useDispatch();

    const ImageTR = () => (
        <Image
            source={require('../../assets/language/tr.png')}
            resizeMode="cover"
            style={styles.languageImage}
        />
    );

    const ImageENG = () => (
        <Image
            source={require('../../assets/language/eng.png')}
            resizeMode="cover"
            style={styles.languageImage}
        />
    );

    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

    const changeLng = (lng) => {
        i18next.changeLanguage(lng);
        dispatch(setLanguage(lng)); // Update language in Redux state
    };

    const clickFirstButton = () => {
        setShowSecondButton(!showSecondButton);
    };

    const clickSecondButton = () => {
        const newLang = currentLanguage === 'tr' ? 'en' : 'tr';
        changeLng(newLang);
        setShowSecondButton(false);
    };

    // Update images based on current language from Redux
    useEffect(() => {
        if (currentLanguage === 'tr') {
            setImage1(<ImageTR />);
            setImage2(<ImageENG />);
        } else {
            setImage1(<ImageENG />);
            setImage2(<ImageTR />);
        }
    }, [currentLanguage]);

    return (
        <View style={styles.ButtonsView}>
            <ButtonOriginal buttonStyle={styles.languageButton}
                onPress={clickFirstButton}>
                {image1}
            </ButtonOriginal>
            {showSecondButton && (
                <ButtonOriginal buttonStyle={styles.languageButton} onPress={clickSecondButton}>
                    {image2}
                </ButtonOriginal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    ButtonsView: {
        position: "absolute",
        top: -20, 
        right: 20,
        paddingHorizontal: 3,
        paddingVertical: 1.2,
        borderColor: color.white,
    },
    languageButton: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 2,
    },
    languageImage: {
        width: 35,
        height: 35,
        borderRadius: 18,
        padding: 7
    }
});

export default LanguageButton;
