import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPage from "../pages/MainPage"
import DetailPage from "../pages/DetailPage";

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "MainPage" component={MainPage}></Stack.Screen>
      <Stack.Screen name = "DetailPage" component={DetailPage}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  )}
export default Navigation