import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPage from "../pages/MainPage/MainPage"
import DetailPage from "../pages/DetailPage/DetailPage";

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name = "MainPage" 
        component={MainPage}
        options={{headerShown:false}} />
      <Stack.Screen 
        name="DetailPage" 
        component={DetailPage} 
        options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )}
export default Navigation