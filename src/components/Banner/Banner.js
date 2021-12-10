import React from "react";
import { FlatList, View } from "react-native";
import useFetch from "../../hooks/useFetch";

const Banner = ({data, renderItem}) => {
  return(
    <View>
      <FlatList data={data} renderItem={renderItem}></FlatList>
    </View>
  )
}
export default Banner