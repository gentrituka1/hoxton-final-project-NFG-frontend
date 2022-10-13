import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Events from './screens/Events';
import Matches from './screens/Matches';
import News from './screens/News';
import Settings from './screens/Settings';
import Teams from './screens/Teams';

export type Navbar = {
  id: number;
  name: string;
}

export const navbar = [
  {
    id: 1,
    name: 'News',
  },
  {
    id: 2,
    name: 'Matches',
  },
  {
    id: 3,
    name: 'Events',
  },
  {
    id: 4,
    name: 'Teams',
  },
  {
    id: 5,
    name: 'Settings',
  }
]

const Stack = createNativeStackNavigator();


export default function App() {
  const [currentScreen, setCurrentScreen] = useState<string | null>(null)

  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="Matches" component={Matches} />
          <Stack.Screen name="Events" component={Events} />
          <Stack.Screen name="Teams" component={Teams} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
      <NavBar navbar={navbar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: "100%",
    width: "100%",
  }
});
