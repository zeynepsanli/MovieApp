import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import styles from "./MovieDetailCardStyle";

const MovieDetailCard = ({item}) => {
  return (
    <View style={styles.body_container}>
      <View>
        <Image />
      </View>
      <View style={styles.genre}>
        {item.genre.map((gen, ind) => {
          return (<View style={styles.genre_index} key={ind}>
            <Text key={ind} >{gen}</Text></View>
          )
        })}
      </View>
      <View style={styles.brief} >
        <Text style={styles.title} >{item.name}</Text>
        <Text style={styles.text} >{item.brief}</Text>
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