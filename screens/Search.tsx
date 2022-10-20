import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, ScrollView, StyleSheet, Button } from "react-native";
import SearchPlayers from "./SearchPlayers";
import SearchTeams from "./SearchTeams";

const Tab = createBottomTabNavigator();

export default function Search() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="TEAMS"
        component={SearchTeams}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarActiveBackgroundColor: "#1f252c",
          tabBarLabelStyle: { fontSize: 20, fontWeight: "bold" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#1f252c",
          tabBarLabelPosition: "beside-icon",
          tabBarIconStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="PLAYERS"
        component={SearchPlayers}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarActiveBackgroundColor: "#1f252c",
          tabBarLabelStyle: { fontSize: 20, fontWeight: "bold", fontFamily: "Roboto" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#1f252c",
          tabBarLabelPosition: "beside-icon",
          tabBarIconStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
