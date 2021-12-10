import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./MovieCardStyle";
import Icon from 'react-native-vector-icons/FontAwesome';


const MovieCard = ({item, onPress}) => {
  return (
  <TouchableOpacity 
    style= {styles.container}
    onPress={onPress}>
    <View style={styles.textView}>
        <Text style={styles.text}>{item.name}</Text>
        <View>
          <Text style={styles.text}>{item.rate}</Text>
          <Icon name='star' size={25} color='yellow' />
        </View>
        {item.genre.map((gen, ind) => {
          return (
            <Text style={styles.text} key={ind} >{gen}</Text>
          )
        })}
    </View>
  </TouchableOpacity>
  )}
export default MovieCard