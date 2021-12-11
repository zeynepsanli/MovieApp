import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text, View, ScrollView } from "react-native";
import GenreButton from "../../components/Button/genreButton";
import MovieCard from "../../components/Cards/MovieCard";
import useFetch from "../../hooks/useFetch";
import styles from "./MainPageStyles";
import genres from "../../components/Genres/genres.json";


const MainPage = () => {
  const {data, loading} = useFetch("movies")
  const navigation = useNavigation()
  const [genre, setGenre] = useState("")

  const handleGenreFilter = (a) => {
    setGenre(a)
  }

  const handleRenderItem = ({ item }) => (
    <MovieCard item={item} onPress={() => navigation.navigate("DetailPage", {id:item})}/>
  )

  const source = genre ? data.filter(a => a.genre.includes(genre)) : data

  return(
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.banner} horizontal={true} >
      <View style={styles.button_View}>
        {genres.map((gen, ind) => {
          return (
            <GenreButton 
              active={gen===genre} 
              style={styles.button} 
              genreName={gen} 
              onPress={handleGenreFilter} key={ind} />
            )
          })}
      </View> 
    </ScrollView>
    <View style={{alignItems:"center", flex:15}}>
      {loading ? <ActivityIndicator />:
      <FlatList 
        data={genre === "ALL GENRES" ? data : source} 
        renderItem={handleRenderItem}
        numColumns={2}
        horizontal={false} />
    }
      </View>
  </SafeAreaView>
  )}
export default MainPage

