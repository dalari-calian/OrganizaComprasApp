import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

interface ButtonSaveAddProps {
  onPress: () => void;
  label: string;
  heightSize: number;
  widthSize: number;
  marginTopSize: number;
  fontSize: number;
}

export default function ButtonSaveAdd({ label, onPress, heightSize, widthSize, marginTopSize, fontSize }: ButtonSaveAddProps) {
  
    const btHeight = height * heightSize
    const btWidth = width * widthSize
    const btMarginTop = height * marginTopSize

    return (
    <TouchableOpacity style={[styles.button, {height: btHeight, width: btWidth, marginTop: btMarginTop}]} onPress={onPress}>
      <Text style={[styles.text, { fontSize: fontSize }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5C94C5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "400",
  },
});
