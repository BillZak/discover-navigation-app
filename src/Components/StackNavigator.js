import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import homePage from "../Pages/homePage";
import searchPage from "../Pages/seachPage";
import notificationPage from "../Pages/notificationPage";
import AboutmePage from "../Pages/AboutmePage";
import ReviewFlatList from "../Pages/ReviewFlatList";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="homePage" component={homePage} />
        <Stack.Screen name="searchPage" component={searchPage} />
        <Stack.Screen name="notificationPage" component={notificationPage} />
        <Stack.Screen name="AboutmePage" component={AboutmePage} />
        <Stack.Screen name="ReviewFlatList" component={ReviewFlatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
