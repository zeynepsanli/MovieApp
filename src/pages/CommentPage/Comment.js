import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from "react-native";
import CommentButton from "../../components/Button/commentButton";

import CommentCard from "../../components/Cards/ComentCard/CommentCard";
import Input from "../../components/Input/Input";
import useFetch from "../../hooks/useFetch";
import styles from "./CommentStyle";

const Comment = () => {
  const route = useRoute()
  const { info } = route.params
  const id = route.params.info.id
  const { data, loading } = useFetch("comments")

  const [source = data.filter(a => a.movieId.includes(id)), setSource] = useState();
  const [keyword, setKeyword] = useState("");

  const addComment = () => {
    setSource([{ keyword: keyword }, ...source])
    handleState()
  }

  const handleState = () => {
    setKeyword("")
  }

  if (loading === true) {
    return <ActivityIndicator />
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listView}>
        {source.length > 0 
          ? <FlatList
              data={source}
              renderItem={({ item }) => <CommentCard item={item} />} />
          : <Text style={styles.text}>Leave The First Comment</Text>}
      </View>
      <View style={styles.inputView}>
        <View style={styles.buttonView}>
          <CommentButton
            onPress={addComment}
            size={25}
            text="Leave a comment" />
        </View>
        <Input
          placeholder={"Comment"}
          value={keyword}
          onChangeText={setKeyword} />
      </View>
    </SafeAreaView>
  )
}
export default Comment