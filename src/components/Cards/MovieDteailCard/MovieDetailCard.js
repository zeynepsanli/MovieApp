import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./MovieDetailCardStyle";

const MovieDetailCard = ({item}) => {
  return (
  <ScrollView style={styles.container}>
    <Text>{item.name}</Text>
    <Text>{item.body}</Text>
  </ScrollView>
  )}
export default MovieDetailCard