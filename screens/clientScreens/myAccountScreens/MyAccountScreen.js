import { View, Text, StyleSheet } from 'react-native';
import { useUserContext } from '../../../contexts/UserContext';
import { color } from '../../../styles/color';
import ButtonOriginal from '../../../components/buttons/buttonOriginal';
import { AntDesign } from '@expo/vector-icons';
import { ScreenWrapper } from '../../../components/wrappers/screenWrapper';
import { Header } from '../../../components/header/header';
import { myProfileData } from '../../../data/myProfileData';

const MyAccountScreen = ({ navigation }) => {
    const { userState, userDispatch } = useUserContext();
    const handleLogout = async () => {
        navigation.navigate("login")
        // userDispatch({ type: 'LOG_OUT' });
    };
    const ButtonTitleComponent = ({ icon, text }) => (
        <View style={styles.buttonTitleView}>
            {icon}
            <Text style={[ styles.header]}>{text}</Text>
            <AntDesign name="caretright" size={24} color={color.black} style={{ opacity: 0.8}} />
        </View>
    )
  
    return (
        <ScreenWrapper>
            <Header viewStyle={styles.headerView} text="Hesabım" />
            <View style={{ margin: 5 }}>
            { myProfileData.map(( field, index ) => (
                <ButtonOriginal 
                  key={index}
                  buttonStyle={styles.profileButtons}
                  textStyle={{ flex: 1, color: color.black }}
                  title={<ButtonTitleComponent icon={field.icon} text={field.text} />}
                  onPress={() => navigation.navigate(field.route)}
                /> 
            ))
            }
            </View>
        </ScreenWrapper>
    );
}
const styles = StyleSheet.create({
    header: {
        fontSize: 26, 
        fontWeight: "bold",
    },
    headerView: { 
        paddingHorizontal:15, 
        paddingVertical: 10, 
        borderRadius: 10, 
        borderWidth: 2 
    },
    profileButtons: { 
        marginTop: 10, 
        flexDirection: "row", 
        height: 60,
        backgroundColor: "transparent", 
        shadowOpacity: 0, 
    },
     buttonTitleView: {
        width:"100%",
        flexDirection:"row", 
        justifyContent: "space-between",
        alignItems:"center", 
    }
})

export default MyAccountScreen;