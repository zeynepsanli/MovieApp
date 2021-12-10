import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import MovieCard from "../../components/Cards/MovieCard/MovieCard";
import useFetch from "../../hooks/useFetch";


const MainPage = () => {
  const {data, loading} = useFetch("")
  const navigation = useNavigation()

  const handleRenderItem = ({item}) => (
    <MovieCard item={item} onPress={() => navigation.navigate("DetailPage", {id:item})}/>
  )

  const handleDetail = ({item}) => {
    
  }
  return(
  <View style={{alignItems:"center"}}>{loading ? <ActivityIndicator />:
    <FlatList 
      data={data} 
      renderItem={handleRenderItem}
      numColumns={2}
      horizontal={false} />
  }
  </View>
  )}
export default MainPage