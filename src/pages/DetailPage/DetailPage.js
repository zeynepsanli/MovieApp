import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

import MovieDetailCard from "../../components/Cards/MovieDteailCard/MovieDetailCard"
import useFetch from "../../hooks/useFetch";
import MovieCard from "../../components/Cards/MovieCard/MovieCard";
import styles from "./DetailPageStyle";


const DetailPage = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params
  const { data, loading } = useFetch(`movies`)

  const genre = route.params.id.genre.slice(0, 1).toString()

  const handleRenderItem = ({ item }) => (
    <MovieCard item={item} onPress={() => navigation.navigate("DetailPage", { id: item })} />
  )

  const source = genre ? data.filter(a => a.genre.includes(genre)) : data

  return (
    <View style={styles.container}>
      {
        loading ? <ActivityIndicator /> : <MovieDetailCard item={id} />
      }
      <View style={styles.listView}>
        <FlatList
          horizontal={true}
          data={source}
          renderItem={handleRenderItem} />
      </View>
    </View>
  )
}
export default DetailPage