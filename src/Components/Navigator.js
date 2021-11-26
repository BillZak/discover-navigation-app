import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import HomePage from "../Pages/homePage";
import SearchPage from "../Pages/seachPage";
import NotificationPage from "../Pages/notificationPage";
import AboutmePage from "../Pages/AboutmePage";

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "red",
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        }}
      >
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarIcon: (props) => (
              <Ionicons
                name="home-outline"
                size={props.size}
                color={props.color}
              />
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <Tab.Screen
          name="SearchPage"
          component={SearchPage}
          options={{
            tabBarIcon: (props) => (
              <Ionicons name="search" size={props.size} color={props.color} />
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <Tab.Screen
          name="NotificationPage"
          component={NotificationPage}
          options={{
            tabBarIcon: (props) => (
              <Ionicons
                name="notifications-outline"
                size={props.size}
                color={props.color}
              />
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <Tab.Screen
          name="AboutmePage"
          component={AboutmePage}
          options={{
            tabBarIcon: (props) => (
              <AntDesign name="user" size={props.size} color={props.color} />
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
