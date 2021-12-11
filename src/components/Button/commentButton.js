import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./commentButtonstyle";
import Icon from "react-native-vector-icons/FontAwesome";

const CommentButton = ({ onPress, text, size }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}>
            <Icon name="comment" size={size} color="silver" />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
export default CommentButton