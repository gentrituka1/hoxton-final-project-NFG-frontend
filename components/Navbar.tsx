import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const navigation = createNativeStackNavigator();

export default function NavBar() {
  return (
    <View style={styles.nav}>
      <Button
        title={"News"}
        onPress={() => {
          navigation.navigate("News");
        }}
      />
      <Button title={"Matches"} />
      <Button title={"Events"} />
      <Button title={"Teams"} />
      <Button title={"Settings"} />
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
