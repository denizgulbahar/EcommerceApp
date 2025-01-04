import { View } from "react-native";
import InputOriginal from "../../../components/input/inputOriginal";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAccountInputs } from "./utilities/useAccountInputs";

export const MyAccountContainer = () => {
  const user = useSelector((state) => state.auth.user); 
  const { t } = useTranslation();

  // Custom Hook Usage
  const [accountInputs, setAccountField] = useAccountInputs(user);

  return (
    <View style={{ marginTop: 20 }}>
      {Object.keys(accountInputs).map((key) => (
        <InputOriginal
          key={key}
          placeholder={t(key)} // Translations for Placeholders
          value={accountInputs[key]} // Dynamic Value
          onChangeText={(value) => setAccountField(key, value)} // Dynamic Function
        />
      ))}
    </View>
  );
};
