import React, { useEffect, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { color } from '../../styles/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonOriginal from '../buttons/buttonOriginal';
const width = Dimensions.get('window').width;
const LabeledPicker = ({ data, label, selectedPicker, setSelectedPicker }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const{t} = useTranslation()
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.buttonLabel}>{label}</Text>
            <TouchableOpacity style={styles.buttonComponent} onPress={openModal}>
                <Text style={styles.buttonText}>
                    {selectedPicker}
                </Text>
                {!selectedPicker && 
                <View style={{ width: 30, height:30, justifyContent:"center", alignItems:"center" }}>
                    <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
                </View>
                }
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Picker
                            style={{ width: 200, height: 140, fontSize: 25 }}
                            selectedValue={selectedPicker}
                            onValueChange={(itemValue) => {
                                setSelectedPicker(itemValue)
                                }
                            }
                        >
                            {data.map((item, itemIndex) => (
                                <Picker.Item key={itemIndex} label={item} value={item} />
                            ))
                            }
                        </Picker>
                        <ButtonOriginal 
                            title="Seç" 
                            onPress={closeModal} 
                            buttonStyle={styles.closeButton}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default LabeledPicker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding:5,
        marginBottom: 20,
    },
    buttonLabel: {
        marginTop: 30,
        marginBottom: 10,
        alignSelf: "flex-start",
        textAlign: "left",
        fontSize: 17,
        color: color.darkgrey,
        fontWeight: "bold",
        fontStyle: "italic",
        paddingHorizontal: 5,
    },
    buttonComponent: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        fontStyle: "italic",
        height: 56,
        paddingVertical: 15,
        borderRadius: 10,
        color: color.darkgrey,
        backgroundColor: color.white,
        borderWidth: 0,
        borderColor: color.white,
        shadowColor: color.black,
        shadowOpacity: 0.15,
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
    buttonText: {
        flex: 8,
        textAlign: "left",
        fontStyle: "italic",
        fontSize: 18,
        paddingHorizontal: 15,
        color: color.darkgrey,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: color.white,
        padding: 30,
        paddingTop: 0,
        borderRadius: 20,
        width: width * 2 / 3,
        height: width * 2 / 3,
    },
    closeButton: {
        marginTop: 35,
        alignSelf: 'flex-end',
    },
    picker: {
        height: 40,
    }
});
