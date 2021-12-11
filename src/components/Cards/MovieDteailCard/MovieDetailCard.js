import React from "react";
import { ScrollView, Text, View, Image, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CommentButton from "../../Button/commentButton";
import styles from "./MovieDetailCardStyle";
import { useNavigation } from "@react-navigation/native";

const MovieDetailCard = ({item}) => {
  const navigation = useNavigation();

  const handleCommentNavigate = ({ }) => {
    navigation.navigate("Comment")

  }

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
          <View>
            <Text style={styles.text}>Rate :{item.rate}</Text>
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
        <CommentButton onPress={() => navigation.navigate("Comment")} />
      </View>
    </View>


  )}
export default MovieDetailCard