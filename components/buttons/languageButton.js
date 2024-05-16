import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Dimensions, Image } from "react-native";
import i18next from '../../services/i18next';
import { useTranslation } from 'react-i18next';
import { color } from "../../styles/color";
import ButtonOriginal from "./buttonOriginal";

const width = Dimensions.get('window').width;
const LanguageButton = ({ style }) => {
    const [showSecondButton, setShowSecondButton] = useState(false);
    const ImageTR = () => (
        <Image
            source={require('../../assets/language/tr.png')}
            resizeMode="cover"
            style={styles.language}
        />
    )
    const ImageENG = () => (
        <Image
            source={require('../../assets/language/eng.png')}
            resizeMode="cover"
            style={styles.language}
        />
    )
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(i18next.language)
    const { t } = useTranslation();

    const changeLng = (lng) => {
        i18next.changeLanguage(lng);
    };
    const clickFirstButton = () => {
        setShowSecondButton(!showSecondButton);
    };
    // function clickSecondButton() {
    //     if (currentLanguage === "tr") {
    //         setImage1(<ImageENG />)
    //         setImage2(<ImageTR />)
    //         changeLng("en")
    //         setCurrentLanguage("en")
    //     } else {
    //         setImage1(<ImageTR />)
    //         setImage2(<ImageENG />)
    //         changeLng("tr")
    //         setCurrentLanguage("tr")
    //     }
    //     setShowSecondButton(false);
    // }

    // useEffect(() => {
    //     if (currentLanguage === "tr") {
    //         setImage1(<ImageTR />)
    //         setImage2(<ImageENG />)
    //     } else {
    //         setImage1(<ImageENG />)
    //         setImage2(<ImageTR />)
    //     }
    // }, [])
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
            )
            }
        </View>

    )
};
const styles = StyleSheet.create({
    ButtonsView: {
        position: "absolute",
        top: -20, right: 20,
        paddingHorizontal: 3,
        paddingVertical: 1.2,
        borderColor: color.white,
    },
    languageButton: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 2,
    },
    language: {
        width: 35,
        height: 35,
        borderRadius: 18,
        padding: 7
    }

})
export default LanguageButton;