import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./MovieCardStyle";

const MovieCard = ({item, onPress}) => {
  return (
  <TouchableOpacity 
    style= {styles.container}
    onPress={onPress}>
    <View style={styles.textView}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.email}</Text>
    </View>
  </TouchableOpacity>
  )}
export default MovieCard