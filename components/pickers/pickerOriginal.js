import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import globalStyles from '../../styles/GlobalStyles';
import ButtonOriginal from '../buttons/buttonOriginal';

const width = Dimensions.get('window').width;
const PickerOriginal = ({ data, label, selectedPicker, setSelectedPicker, 
                    pickerViewStyle, labelStyle 
                    }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };

    let defaultLabelStyle = {
      ...globalStyles(width).input,
      flex:0.5,
      paddingVertical:10,
      fontWeight: "400",
    }
    let defaultPickerViewStyle = {
      flex:1,
      ...globalStyles(width).leftedSmallText,
      borderWidth: 1,
      outlineStyle: "none",
    }
    return (
        <View style={styles.container}>
            <Text style={[ defaultLabelStyle,labelStyle ]} numberOfLines={1} >{label} </Text>
            <ButtonOriginal 
              title={selectedPicker} 
              buttonStyle={[ defaultPickerViewStyle, pickerViewStyle ]} 
              onPress={openModal} 
            />
            <Modal
              visible={modalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={closeModal}
            >
              <View style={globalStyles(width).modalContainer}>
                  <View style={globalStyles(width).modalContainer}>
                      <Picker
                        style={{ width: 200, height: 140, fontSize: 25 }}
                        selectedValue={selectedPicker}
                        onValueChange={(itemValue) => {
                          setSelectedPicker(itemValue)
                        }}
                      >
                        {data.map((item, itemIndex) => (
                        <Picker.Item key={itemIndex} label={item} value={item} />
                        ))
                        }
                      </Picker>
                      <ButtonOriginal title={t("Seç")} onPress={closeModal} />
                  </View>
              </View>
            </Modal>
        </View>
    );
};

export default PickerOriginal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    marginRight: 5,
    height: 40,
    minHeight: 20,
  },
});
