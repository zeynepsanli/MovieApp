import { useRoute } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import MovieDetailCard from "../../components/Cards/MovieDteailCard/MovieDetailCard"
import useFetch from "../../hooks/useFetch";


  const DetailPage = () => {
  const route = useRoute()
  const {id} = route.params.id
  const {data, loading} = useFetch(`${id}`)
  console.log(id)
  return(
  <View>{loading ? <ActivityIndicator/> :
    <MovieDetailCard item={data}/>
  }
  </View>
  )}
export default DetailPage