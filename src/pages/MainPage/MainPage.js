import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text, View, ScrollView } from "react-native";
import GenreButton from "../../components/Button/genreButton";
import MovieCard from "../../components/Cards/MovieCard/MovieCard";
import useFetch from "../../hooks/useFetch";
import styles from "./MainPageStyles";
import genres from "../../components/Genres/genres.json"


const MainPage = () => {
  const {data, loading} = useFetch("")
  const navigation = useNavigation()
  const [genre, setGenre] = useState("")

  const handleGenreFilter = () => {
  setGenre("ACTION")
  }

  const handleRenderItem = ({ item }) => (
    <MovieCard item={item} onPress={() => navigation.navigate("DetailPage", {id:item})}/>
  )

  const handleDetail = ({item}) => {
    
  }
    
  let source = data.filter(e => e.genre.includes(genre)) ?? "";
  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.button_View}>
      <GenreButton style = {styles.button} genreName={"ACTION"} onPress={handleGenreFilter}/>
      <GenreButton style = {styles.button} genreName={"COMEDY"} onPress={handleGenreFilter}/>
      <GenreButton style = {styles.button} genreName={"HORROR"} onPress={handleGenreFilter}/>
      <GenreButton style = {styles.button} genreName={"DRAMA"} onPress={handleGenreFilter}/>
    </View> 
    <View style={styles.button_View}> 
      <GenreButton style = {styles.button} genreName={"FANTASY"} onPress={handleGenreFilter}/>
      <GenreButton style = {styles.button} genreName={"ROMANCE"} onPress={handleGenreFilter}/>
      <GenreButton style = {styles.button} genreName={"THRILLER"} onPress={handleGenreFilter}/>
      <GenreButton style = {styles.button} genreName={"ALL GENRES"} onPress={handleGenreFilter}/>
    </View>
    <View style={{alignItems:"center", flex:15}}>{loading ? <ActivityIndicator />:
      <FlatList 
        data={data} 
        renderItem={handleRenderItem}
        numColumns={2}
        horizontal={false} />
    }
    </View>
    
  </SafeAreaView>
  )}
export default MainPage