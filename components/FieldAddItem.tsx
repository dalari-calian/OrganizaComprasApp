import React, { useState } from "react";
import { TextInput, StyleSheet, Dimensions, View, Modal, TouchableOpacity, Text } from "react-native";

const { height, width } = Dimensions.get('window');

interface FieldAddItemProps {
    placeholder: string;
    type: number;
    value: string;
}

export default function FieldAddItem({ placeholder, type, value }: FieldAddItemProps) {
    const fieldHeight = height * 0.06;
    const padding = width * 0.05;
    const txtAreafieldHeight = height * 0.20;
    const [selectedUnit, setSelectedUnit] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const units = ["Kg", "Litros"];

    const handleSelectUnit = (unit: string) => {
        setSelectedUnit(unit);
        setModalVisible(false);
    };

    if (type == 1) {
        return (
            <TextInput
                style={[styles.fieldStyle, { height: fieldHeight, paddingLeft: padding, paddingRight: padding }]}
                placeholder={placeholder}
                maxLength={30}
                value={value}
            />
        );
    }
    if (type == 2) {
        return (
            <TextInput
                style={[styles.textArea, { height: txtAreafieldHeight, paddingLeft: padding, paddingRight: padding }]}
                placeholder={placeholder}
                maxLength={217}
                multiline={true}
                numberOfLines={7}
                value={value}
            />
        );
    }
    if (type == 3) {
        return (
            <View>
                <TouchableOpacity
                    style={[styles.pickerContainer, { height: fieldHeight }]} 
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={[styles.pickerText, {color: selectedUnit ? '#000' : 'grey'}]}>
                        {selectedUnit || placeholder}
                    </Text>
                </TouchableOpacity>

                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            {units.map((unit, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.modalItem}
                                    onPress={() => handleSelectUnit(unit)}
                                >
                                    <Text style={styles.modalItemText}>{unit}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
    return null;
}

const styles = StyleSheet.create({
    fieldStyle: {
        backgroundColor: '#d9d9d9',
        borderRadius: 15,
        borderWidth: 2.5,
        borderColor: 'rgba(0, 0, 0, 0.45)',
        fontSize: 17,
        width: '100%'
    },
    textArea: {
        backgroundColor: '#d9d9d9',
        borderRadius: 15,
        borderWidth: 2.5,
        borderColor: 'rgba(0, 0, 0, 0.45)',
        fontSize: 17,
        textAlignVertical: 'top',
    },
    pickerContainer: {
        borderWidth: 2.5,
        borderColor: "rgba(0, 0, 0, 0.45)",
        borderRadius: 15,
        backgroundColor: "#d9d9d9",
        overflow: "hidden",
        justifyContent: 'center',
        paddingHorizontal: 15,
        width: '100%', // Garante que ocupe a largura total
    },
    pickerText: {
        fontSize: 17,
        color: 'grey',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: width * 0.8,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
    },
    modalItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    modalItemText: {
        fontSize: 17,
        textAlign: 'center',
    },
});