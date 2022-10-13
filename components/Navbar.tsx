import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const navigation = useNavigation();

export default function NavBar({}) {
  return (
    <View style={styles.nav}>
      <Button
        title={"News"}
        onPress={() => {
          navigation.navigate("News", {});
        }}
      />
      <Button title={"Matches"} onPress={() => {
          navigation.navigate("Matches". {});
      }} />
      <Button title={"Events"} onPress={() => {
          navigation.navigate("Events", {});
      }}/>
      <Button title={"Teams"} onPress={() => {
          navigation.navigate("Teams", {});
      }}/>
      <Button title={"Settings"} onPress={() => {
          navigation.navigate("Settings", {});
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "lightblue",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "black",
    alignItems: "flex-end",
  },
});
