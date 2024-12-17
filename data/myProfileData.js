import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "../styles/color";

export const myProfileData = [
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