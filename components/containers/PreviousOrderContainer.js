import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { color } from "../../styles/color";
import ButtonOriginal from "../buttons/buttonOriginal";

const width = Dimensions.get('window').width;

const FieldComponent = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.inputPlaceholder}>
      {label}: {value}
    </Text>
  </View>
);

export const PreviousOrderContainer = ({ values }) => {
  const { t } = useTranslation();
  const [detailed, setDetailed] = useState(false);

  const basicFields = ["siparisNo", "siparisTarihi", "siparisÜrünü", "ÖdemeMiktarı"];
  const detailedFields = ["teslimatAdresi", "teslimatAdSoyad", "teslimatTel", "odemeTipi"];

  useEffect(() => setDetailed(false), []);

  return (
    <View style={styles.outContainer}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          {basicFields.map((field, index) => (
            <FieldComponent key={index} label={t(field)} value={values[field] || ""} />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <ButtonOriginal
            buttonStyle={styles.detailButton}
            title={detailed ? t("removeDetail") : t("detail")}
            onPress={() => setDetailed((prev) => !prev)}
          />
        </View>
      </View>
      {detailed &&
        detailedFields.map((field, index) => (
          <FieldComponent key={index} label={t(field)} value={values[field] || ""} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  inputPlaceholder: {
    textAlign: "left",
    fontSize: width > 500 ? 22 : 18,
    padding: 7,
  },
  outContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: color.white,
    shadowColor: color.black,
    shadowOpacity: 1,
  },
  buttonContainer: {
    justifyContent: "flex-start",
    paddingVertical: 7,
  },
  detailButton: {
    width: 100,
    backgroundColor: color.secondColor,
    height: 70,
    padding: 8,
  },
});
