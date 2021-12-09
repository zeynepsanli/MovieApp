import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({item, onPress}) => {
  return (
  <TouchableOpacity onPress={onPress}>
    <Text>{item.name}</Text>
  </TouchableOpacity>
  )}
export default MovieCard