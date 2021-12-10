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
            <Text style={styles.text} key={ind} >   {gen}</Text></View>
          )
        })}
      </View>
      <View style={styles.brief} >
        <Text>{item.name}</Text>
        <Text>{item.brief}</Text>
      </View>
      <View style={styles.cast} >
        <Text>{item.director}</Text>
        <Text>{item.cast}</Text>
      </View>

    </View>


  )}
export default MovieDetailCard