import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function NavBar() {
  const navigation = useNavigation();
  const color = "#1f252c";

  return (
    <View style={styles.nav}>
      <Button
        color={color}
        title={"News"}
        onPress={() => {
          console.log("News");
          navigation.navigate("News");
        }}
      />
      <Button
        color={color}
        title={"Matches"}
        onPress={() => {
          navigation.navigate("Matches");
        }}
      />
      <Button
        color={color}
        title={"Events"}
        onPress={() => {
          navigation.navigate("Events");
        }}
      />
      <Button
        color={color}
        title={"Teams"}
        onPress={() => {
          navigation.navigate("Teams");
        }}
      />
      <Button
        color={color}
        title={"Settings"}
        onPress={() => {
          navigation.navigate("Settings");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#1f252c",
    justifyContent: "space-between",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "black",
    alignItems: "flex-end",
  },
  button: {
    backgroundColor: "#1f252c",
  },
});
