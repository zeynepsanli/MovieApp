import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

import MovieDetailCard from "../../components/Cards/MovieDteailCard/MovieDetailCard"
import useFetch from "../../hooks/useFetch";
import MovieCard from "../../components/Cards/MovieCard/MovieCard";


  const DetailPage = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const {id} = route.params
  const {data, loading} = useFetch(``)
  console.log(id)
  const handleRenderItem = ({ item }) => (
    <MovieCard item={item} onPress={() => navigation.navigate("DetailPage", {id:item})}/>
  )

  return(
    <View style={{ flex: 1 }}>{loading ? <ActivityIndicator /> :
    <MovieDetailCard item={id} />
      }
      <View style={{flex:1}}>
        <FlatList horizontal={true} data={data} renderItem={handleRenderItem} />
      </View>
    </View>
  )}
export default DetailPage