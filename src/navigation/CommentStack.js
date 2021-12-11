import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Comment from "../pages/CommentPage/Comment";

const Stack = createNativeStackNavigator();

const CommentStack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Comment"
                component={Comment}
            />
        </Stack.Navigator>
    )
}

export default CommentStack;