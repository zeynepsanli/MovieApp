import React from "react";
import { TextInput, View } from "react-native";
import styles from "./InputStyle";

const Input = ({ onChangeText, value, placeholder }) => {
  return (
    <View style={styles.input}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
      />
    </View>
  )
}
export default Input