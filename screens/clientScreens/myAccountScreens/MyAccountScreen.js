import { View, Text, StyleSheet } from 'react-native';
import { color } from '../../../styles/color';
import ButtonOriginal from '../../../components/buttons/buttonOriginal';
import { AntDesign } from '@expo/vector-icons';
import { ScreenWrapper } from '../../../components/wrappers/screenWrapper';
import { Header } from '../../../components/header/header';
import { myProfileData } from '../../../data/myProfileData';
import ExitButton from '../../../redux/feature/auth/exitButton';
import { useSelector } from 'react-redux';
import LanguageButton from '../../../redux/feature/auth/languageButton';

const MyAccountScreen = ({ navigation }) => {
    const user = useSelector((state) => state.auth.user)
    const logged = useSelector((state) => state.auth.isLoggedIn)
    // console.log("user:",user)
    const ButtonTitleComponent = ({ icon, text }) => (
        <View style={styles.buttonTitleView}>
            {icon}
            <Text style={[ styles.header]}>{text}</Text>
            <AntDesign name="caretright" size={24} color={color.black} style={{ opacity: 0.8}} />
        </View>
    )
    const handleNavigation = (field) => {
        navigation.navigate(field.route)
        // console.log("navigation:", field.route);
    }
    return (
        <ScreenWrapper>
            <Header viewStyle={styles.headerView} text="Hesabım" />
            <View style={{ margin: 5 }}>
            {myProfileData.map(( field, index ) => (
                <ButtonOriginal 
                  key={index}
                  buttonStyle={styles.profileButtons}
                  textStyle={{ flex: 1, color: color.black }}
                  title={<ButtonTitleComponent icon={field.icon} text={field.text} />}
                  onPress={() => handleNavigation(field)}
                /> 
            )
            )}
            </View>
            <ExitButton />
                <View style={styles.changeLanguageView}>
                    <Text style={styles.language}>Dil Değiştir</Text>
                    <LanguageButton viewStyle={styles.LanguageButton} />
                </View>
        </ScreenWrapper>
    );
}
const styles = StyleSheet.create({
    LanguageButton: {
        position: "static", 
        marginHorizontal: 20,
        top: 0,
    },
    changeLanguageView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginVertical: 40,
    },
    language: {
        textAlign: "right",
        fontSize: 22, 
        fontWeight: "bold",
    }, 
    header: {
        fontSize: 26, 
        fontWeight: "bold",
    },
    headerView: { 
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        borderRadius: 10, 
        borderWidth: 2 
    },
    profileButtons: { 
        marginTop: 10, 
        flexDirection: "row", 
        height: 60,
    },
     buttonTitleView: {
        width: "100%",
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center", 
    }
})

export default MyAccountScreen;