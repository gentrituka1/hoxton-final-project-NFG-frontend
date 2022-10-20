import {
  NavigationContainer,
  StackActions,
  StackRouter,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Touchable,
  TouchableHighlight,
} from "react-native";
import NavBar from "../components/NavBar";
import Players from "../screens/Players";
import Matches from "../screens/Matches";
import News from "../screens/News";
import Settings from "../screens/Settings";
import Ranking from "../screens/Ranking";
import Search from "../screens/Search";
import SearchTeams from "../screens/SearchTeams";
import SearchPlayers from "../screens/SearchPlayers";

type Props = {
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
};

const Stack = createNativeStackNavigator();

export default function StackNavigator({
  hidden,
  setHidden,
}: Props) {
  
  const navigation = useNavigation();
  const color = "white";

  return (
    <Stack.Navigator initialRouteName="News">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          header: () => (
            <>
              <View
                style={{
                  padding: 10
                }}
              >
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                  <TouchableHighlight
                    onPress={() => {
                      navigation.navigate("News");
                    }}
                  >
                    <Image
                      source={require("../assets/leftArrow.png")}
                      style={{ width: 15, height: 15 }}
                    />
                  </TouchableHighlight>
                  <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    placeholderTextColor={color}
                  />
                </View>
              </View>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{
          header: () => (
            <>
              <View style={styles.header}>
                <Text style={styles.headerText}>News</Text>
                <TouchableHighlight
                  onPress={() => {
                    navigation.navigate("Search");
                  }}
                >
                  <Image
                    source={require("../assets/search.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableHighlight>
              </View>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="Matches"
        component={Matches}
        options={{
          header: () => (
            <>
              <View style={styles.header}>
                <Text style={styles.headerText}>Upcoming Matches</Text>
                <TouchableHighlight
                  onPress={() => {
                    navigation.navigate("Search");
                  }}
                >
                  <Image
                    source={require("../assets/search.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableHighlight>
              </View>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="Players"
        component={Players}
        options={{
          header: () => (
            <>
              <View style={styles.header}>
                <Text style={styles.headerText}>Players</Text>
                <TouchableHighlight
                  onPress={() => {
                    navigation.navigate("Search");
                  }}
                >
                  <Image
                    source={require("../assets/search.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableHighlight>
              </View>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="Ranking"
        component={Ranking}
        options={{
          header: () => (
            <>
              <View style={styles.header}>
                <Text style={styles.headerText}>Ranking</Text>
                <TouchableHighlight
                  onPress={() => {
                    navigation.navigate("Search");
                  }}
                >
                  <Image
                    source={require("../assets/search.png")}
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableHighlight>
              </View>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          header: () => (
            <>
              <View style={styles.header}>
                <Text style={styles.headerText}>Settings</Text>
                <Button
                  title="Hide/Show"
                  color="#1f252c"
                  onPress={() => {
                    setHidden(!hidden);
                  }}
                />
              </View>
            </>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingBottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1f252c",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "lightblue",
    fontStyle: "italic",
  },
  input: {
    height: 30,
    width: 180,
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    paddingLeft: 10,
  },
});
