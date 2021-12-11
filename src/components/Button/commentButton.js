import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./commentButtonstyle";
import Icon from "react-native-vector-icons/FontAwesome";

const CommentButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}>
            <Icon name="comment" size={60} color="silver" />
            <Text style={styles.text}>See Rewievs</Text>
        </TouchableOpacity>
    )
}
export default CommentButton