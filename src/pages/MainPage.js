import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MovieCard from "../components/Cards/MovieCard";
import useFetch from "../hooks/useMovieDetail";


const MainPage = () => {
  const {data, loading} = useFetch()
  const navigation = useNavigation()

  const handleDetail = () => {
    navigation.navigate("DetailPage")
  }
  console.log(data)
  return(
  <View>
    <FlatList data={data} renderItem={({item}) => <MovieCard item = {item} onPress={handleDetail}/> }></FlatList>
  </View>
  )}
export default MainPage