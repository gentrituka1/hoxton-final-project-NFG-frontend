import { NavigationContainer, StackActions, StackRouter, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Events from './screens/Events';
import Matches from './screens/Matches';
import News from './screens/News';
import Settings from './screens/Settings';
import Teams from './screens/Teams';



const Stack = createNativeStackNavigator();



export default function App() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Header />
          <Stack.Navigator initialRouteName="News">
            <Stack.Screen name="News" component={News} options={{header: () => 
            <>
            <View style={styles.header}>
              <Text style={styles.headerText}>News</Text>
              <TextInput style={styles.input} placeholder="Search..."/>
            </View>
            </>
          }}/>
            <Stack.Screen name="Matches" component={Matches} />
            <Stack.Screen name="Events" component={Events} />
            <Stack.Screen name="Teams" component={Teams} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        <NavBar />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: "100%",
    width: "100%",
  }, 
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 20,
    color: "crimson",
  },
  input: {
    height: 30,
    width: 200,
    borderWidth: 1,
    paddingLeft: 10,
  }
});
