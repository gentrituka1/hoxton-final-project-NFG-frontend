import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Navbar from './components/Navbar';

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



export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <Navbar navbar={navbar}/>
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
