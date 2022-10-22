import {
  NavigationContainer,
  StackActions,
  StackRouter,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, StatusBar, StyleSheet, Text, TextInput, View, Image, Touchable, TouchableHighlight } from "react-native";
import NavBar from "./components/NavBar";
import Players from "./screens/Players";
import Matches from "./screens/Matches";
import News from "./screens/News";
import Settings from "./screens/Settings";
import Ranking from "./screens/Ranking";
import Search from "./screens/Search";
import StackNavigator from "./components/StackNavigator";


export default function App() {
  const [hidden, setHidden] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar 
        animated={true}
        hidden={hidden}
        backgroundColor="#1f252c"
        showHideTransition={"slide"}
        
      />
      <NavigationContainer>
        <StackNavigator hidden={hidden} setHidden={setHidden} />
        <NavBar />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "#1f252c"
  }
});
