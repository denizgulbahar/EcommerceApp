import { View, Text } from 'react-native';
import { useUserContext } from '../../../contexts/UserContext';
import { color } from '../../../styles/color';
import ButtonOriginal from '../../../components/buttons/buttonOriginal';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScreenWrapper } from '../../../components/wrappers/screenWrapper';
import { Header } from '../../../components/header/header';
import { generalStyles } from '../../../styles/generalStyles';

const MyAccountScreen = ({ navigation }) => {
    const { userState, userDispatch } = useUserContext();
    const handleLogout = async () => {
        navigation.navigate("login")
        // userDispatch({ type: 'LOG_OUT' });
    };
    const ButtonTitleComponent = ({ icon, text }) => (
        <View 
            style={{
                width:"100%",
                flexDirection:"row", 
                justifyContent: "space-between",
                alignItems:"center", 
            }}
        >
            {icon}
            <Text style={[ generalStyles.header]}>{text}</Text>
            <AntDesign name="caretright" size={24} color={color.black} style={{ opacity: 0.8}} />
        </View>
    )
   let profileButtonData = [
    {
        icon: <Ionicons name="person" size={32} color={color.black} />, 
        text: "Kişisel Bilgilerim", 
        route:"personal-informations"
    },
    {
        icon: <FontAwesome5 name="wallet" size={32} color={color.black} />, 
        text: "Siparişlerim",
        route:"previous-orders",
    },
    {
        icon: <MaterialCommunityIcons name="exit-to-app" size={36} color={color.redstrong} />, 
        text: "Çıkış Yap",
        route:"login",
    },
   ]
    return (
        <ScreenWrapper>
            <Header 
                viewStyle={{ 
                    paddingHorizontal:15, 
                    paddingVertical: 10, 
                    borderRadius: 10, 
                    borderWidth: 2 
                    }} 
                text="Hesabım" 
            />
            <View style={{ margin: 5 }}>
            { profileButtonData.map(( field, index ) => (
                <ButtonOriginal 
                  key={index}
                  buttonStyle={{ 
                      marginTop: 10, 
                      flexDirection: "row", 
                      height: 60,
                      backgroundColor: "transparent", 
                      shadowOpacity: 0, 
                  }}
                  textStyle={{ flex: 1, color: color.black }}
                  title={<ButtonTitleComponent icon={field.icon} text={field.text} />}
                  onPress={() => navigation.navigate(field.route)}
                /> 
            ))
            }
            </View>
        </ScreenWrapper>
    );
};
export default MyAccountScreen;