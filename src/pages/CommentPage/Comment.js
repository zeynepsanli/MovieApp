import React from "react";
import { FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommentCard from "../../components/Cards/ComentCard/CommentCard";
import useFetch from "../../hooks/useFetch";


const Comment = () => {
    const { data, loading } = useFetch("")

    const renderComment = ({ item }) => {
        <CommentCard item={item} />
    }

    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderComment}  >

            </FlatList>
        </SafeAreaView>
    )
}

export default Comment;
