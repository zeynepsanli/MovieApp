import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./genreButtonstyle";

const GenreButton = ({genreName, onPress, active }) => {
  return(
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPress(genreName)}>
      <Text style={styles.text}>{genreName}</Text>
    </TouchableOpacity>
  )
}
export default GenreButton