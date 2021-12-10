import React from "react";
import { ScrollView, Text, View, Image, ImageBackground } from "react-native";
import styles from "./MovieDetailCardStyle";

const MovieDetailCard = ({item}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.genre}>
        {item.genre.map((gen, ind) => {
          return (
          <View style={styles.genre_index} key={ind}>
            <Text key={ind} >{gen}</Text>
          </View>
          )
        })}
      </View>
      <View style={styles.body} >
        <ImageBackground 
          style={styles.image}
          source={{uri:item.image}}>
        <View style={styles.briefView}>
          <Text style={styles.title} >{item.name}</Text>
          <Text style={styles.text} >{item.brief}</Text>
          <Text style={styles.text}>{item.rate}</Text>
        </View>
        </ImageBackground>
      </View>
      <View style={styles.cast} >
        <Text>DIRECTOR: {item.director}</Text>
        <Text>CAST:</Text>
        {item.cast.map((cast, ind) => {
          return (
            <Text key={ind} >{cast}</Text>
          )
        })}
      </View>
    </View>


  )}
export default MovieDetailCard