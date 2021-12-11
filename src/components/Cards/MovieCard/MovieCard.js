import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./MovieCardStyle";
import Icon from 'react-native-vector-icons/FontAwesome';


const MovieCard = ({item, onPress}) => {
  return (
  <TouchableOpacity 
    style= {styles.container}
    onPress={onPress}>
    <ImageBackground 
      source={{uri:item.image}} 
      style={styles.imageContainer}>
      <View style={styles.textView}>
        <Text style={styles.text}>{item.name}</Text>
        <View style ={styles.rateView}>
          <Text style={styles.text}>{item.rate}</Text>
          <Icon name='star' size={25} color='yellow' />
        </View>
          {item.genre.map((gen, ind) => {
          return (
            <Text style={styles.text} key={ind} >{gen}</Text>
            )
          })}
      </View>
    </ImageBackground>
  </TouchableOpacity>
  )}
export default MovieCard