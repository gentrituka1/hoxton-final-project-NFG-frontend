import {
  NavigationContainer,
  StackActions,
  StackRouter,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Events from "./screens/Events";
import Matches from "./screens/Matches";
import News from "./screens/News";
import Settings from "./screens/Settings";
import Teams from "./screens/Teams";

const Stack = createNativeStackNavigator();

export default function App() {
  const [search, setSearch] = useState("");
  const [hidden, setHidden] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar 
        animated={true}
        hidden={hidden}
      />
      <NavigationContainer>
        <Header />
        <Stack.Navigator initialRouteName="News">
          <Stack.Screen
            name="News"
            component={News}
            options={{
              header: () => (
                <>
                  <View style={styles.header}>
                    <Text style={styles.headerText}>News</Text>
                    <TextInput style={styles.input} placeholder="Search..." />
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
                    <Text style={styles.headerText}>Match</Text>
                    <TextInput style={styles.input} placeholder="Search..." />
                  </View>
                </>
              ),
            }}
          />
          <Stack.Screen
            name="Events"
            component={Events}
            options={{
              header: () => (
                <>
                  <View style={styles.header}>
                    <Text style={styles.headerText}>Events</Text>
                    <TextInput style={styles.input} placeholder="Search..." />
                  </View>
                </>
              ),
            }}
          />
          <Stack.Screen
            name="Teams"
            component={Teams}
            options={{
              header: () => (
                <>
                  <View style={styles.header}>
                    <Text style={styles.headerText}>Teams</Text>
                    <TextInput style={styles.input} placeholder="Search..." />
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
                    <TextInput style={styles.input} placeholder="Search..." />
                    <Button title="Hide/Show" color="#841584" onPress={() => {
                      setHidden(!hidden);
                    }}/>
                  </View>
                </>
              ),
            }}
          />
        </Stack.Navigator>
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
  },
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
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    
  },
  input: {
    height: 30,
    width: 180,
    borderWidth: 1,
    borderColor: "white",
    paddingLeft: 10,
  },
});
