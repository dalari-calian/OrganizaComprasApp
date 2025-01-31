import React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export default function FieldListName() {
    const fieldHeight = height * 0.06;
    const padding = width * 0.05;
    
    return (
        <TextInput 
            style={[styles.fieldStyle, { height: fieldHeight, paddingLeft: padding, paddingRight: padding}]} 
            placeholder="Preencha o nome da lista de compras"
            maxLength={30}
        />
    )
}

const styles = StyleSheet.create({
    containerField: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fieldStyle: {
      backgroundColor: '#d9d9d9',
      borderRadius: 15,
      borderWidth: 2.5,
      borderColor: 'rgba(0, 0, 0, 0.45)',
      fontSize: 17,
      width: '100%'
    },
  });

