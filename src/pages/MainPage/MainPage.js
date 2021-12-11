import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text, View, ScrollView } from "react-native";
import GenreButton from "../../components/Button/genreButton";
import MovieCard from "../../components/Cards/MovieCard/MovieCard";
import useFetch from "../../hooks/useFetch";
import styles from "./MainPageStyles";
import genres from "../../components/Genres/genres.json";


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


  return(
  <SafeAreaView style={styles.container}>
      <ScrollView style={styles.banner} horizontal={true} >
        <View style={styles.button_View}>
          {genres.map((gen, ind) => {
            return (
              <GenreButton style={styles.button} genreName={gen.name} onPress={handleGenreFilter} key={ind} />
            )
          })}
        </View> 
      </ScrollView>
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

