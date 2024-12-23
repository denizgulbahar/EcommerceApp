// orderHistory-Flatlistsiz
import { Text,View,StyleSheet } from "react-native";
import InputOriginal from "../input/inputOriginal";
import { useTranslation } from "react-i18next";
import React from "react";
import { color } from "../../styles/color";
export const MyAccountContainer = ({ accountInputs, setAccountInputs }) => {
    const {t} = useTranslation()
    function setAccountsHandler(key, value) {
        let tempAddress = { ...accountInputs };
        tempAddress[key] = value;
        setAccountInputs(tempAddress);
    }
    const accountFields = [
        { key: 'name', label:t("name")},
        { key: 'surname', label:t("surname")},
        { key: 'password', label:t("password")},
        { key: 'email', label:t("email")},
        { key: 'telNo', label:t("phoneNumber")},
      ];
    return(
        <View style={{ marginTop:20 }}>
             { accountFields.map((field) => (
                    <InputOriginal
                        key={field.key}
                        label={field.label}
                        value={accountInputs[field.key]}
                        onChangeText={(v) => setAccountsHandler(field.key, v)}
                    />
                ))
                }
        </View>
    )
}
const styles = StyleSheet.create({
    addressInput: {
        backgroundColor: color.mainColor,
        borderRadius: 25,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        textAlignVertical: 'top',
    },

});