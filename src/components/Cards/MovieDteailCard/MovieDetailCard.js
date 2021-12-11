import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View, Image, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import CommentButton from "../../Button/commentButton";
import styles from "./MovieDetailCardStyle";

const MovieDetailCard = ({ item }) => {
  const navigation = useNavigation()

  const handleCommentNavigate = ({ }) => {
    navigation.navigate("Comment")
  }

  return (
    <View style={styles.container}>
      <View style={styles.body} >
        <ImageBackground
          style={styles.image}
          source={{ uri: item.image }}>
          <View style={styles.briefView}>
            <Text style={styles.title} >{item.name}</Text>
            <Text style={styles.text} >{item.brief}</Text>
            <View style={styles.genreView}>
              <View style={styles.rateView}>
                <Text style={styles.text}>Rate :{item.rate}</Text>
                <Icon name="star" color="yellow" size={20} />
              </View>
              <Text style={styles.text}>Genre :</Text>
              {item.genre.map((gen, ind) => {
                return (
                  <Text key={ind} style={styles.text} >{gen}</Text>
                )
              })}
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.cast} >
        <View>
          <Text>DIRECTOR: {item.director}</Text>
          <Text>CAST:</Text>
          {item.cast.map((cast, ind) => {
            return (
              <Text key={ind} >{cast}</Text>
            )
          })}
        </View>
        <CommentButton
          size={60}
          text="See Reviews"
          onPress={() => navigation.navigate("CommentPage", { info: item })} />
      </View>
    </View>
  )
}
export default MovieDetailCard