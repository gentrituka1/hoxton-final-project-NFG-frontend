import {
  NavigationContainer,
  StackActions,
  StackRouter,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import NavBar from "./components/NavBar";
import Players from "./screens/Players";
import Matches from "./screens/Matches";
import News from "./screens/News";
import Settings from "./screens/Settings";
import Ranking from "./screens/Ranking";

const Stack = createNativeStackNavigator();
const color = "white"

export default function App() {
  const [search, setSearch] = useState("");
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
        <Stack.Navigator initialRouteName="News">
          <Stack.Screen
            name="News"
            component={News}
            options={{
              header: () => (
                <>
                  <View style={styles.header}>
                    <Text style={styles.headerText}>News</Text>
                    <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={color} />
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
                    <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={color} />
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
                    <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={color} />
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
                    <TextInput style={styles.input} placeholder="Search..."  placeholderTextColor={color}/>
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
                    <Button title="Hide/Show" color="#1f252c" onPress={() => {
                      setHidden(!hidden);
                    }}/>
                    <TextInput style={styles.input} placeholder="Search..." placeholderTextColor={color} />
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
    fontSize: 22,
    fontWeight: "bold",
    color: "lightblue",
    fontStyle: "italic"
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
