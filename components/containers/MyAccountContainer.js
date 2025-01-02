import { View} from "react-native";
import InputOriginal from "../input/inputOriginal";
import { useTranslation } from "react-i18next";
import React from "react";
export const MyAccountContainer = ({ accountInputs, setAccountInputs }) => {
    const {t} = useTranslation()
    function setAccountsHandler(key, value) {
        let tempAddress = { ...accountInputs };
        tempAddress[key] = value;
        setAccountInputs(tempAddress);
    }
    const accountFields = [
        { key: 'name', placeholder: t("name")},
        { key: 'surname', placeholder: t("surname")},
        { key: 'password', placeholder: t("password")},
        { key: 'email', placeholder: t("email")},
        { key: 'telNo', placeholder: t("phoneNumber")},
      ];
    return(
        <View style={{ marginTop: 20 }}>
            {accountFields.map((field) => (
                <InputOriginal
                    key={field.key}
                    placeholder={field.placeholder}
                    value={accountInputs[field.key]}
                    onChangeText={(v) => setAccountsHandler(field.key, v)}
                />
            ))
            }
        </View>
    )
}