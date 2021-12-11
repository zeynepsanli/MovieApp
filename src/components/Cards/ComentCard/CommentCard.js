import React from "react";
import { SafeAreaView} from "react-native-safe-area-context";
import { Text, View } from "react-native";
import styles from "./CommentCardStyle";

const CommentCard = ({item}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{item.comment}</Text>
            <Text>User : {item.id}</Text>
        </View>
    )
}
export default CommentCard;