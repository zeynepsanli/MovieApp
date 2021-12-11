import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

const CommentCard = ({ item }) => {
    return (
        <SafeAreaView>
            <Text>{item.comment}</Text>
        </SafeAreaView>
    )

}
export default CommentCard;