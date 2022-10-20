import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, ScrollView, StyleSheet, Button } from "react-native";
import SearchPlayers from "./SearchPlayers";
import SearchTeams from "./SearchTeams";
import { TeamPlayerType } from "./Ranking";
import { PlayerType } from "./Players";

const Tab = createBottomTabNavigator();

type Props = {
  search: string;
}

export default function Search( { search }: Props) {
  return (
    <Tab.Navigator initialRouteName="TEAMS" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="TEAMS"
        children={() => <SearchTeams search={search}/>}
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
        children={() => <SearchPlayers search={search}/>}
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
