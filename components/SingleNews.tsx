import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { timeElapsed } from '../utils/utils';


export default function SingleNews({item}: any) {

  function getRandomNumber() {
    return Math.floor(Math.random() * 100);
  }

  return (
    <View>
          <Image source={{uri: `https://picsum.photos/id/${getRandomNumber()}/800/600`}} style={{width: "100%", height: 250}} />
          <View style={styles.titleDiv}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.time}>{timeElapsed(item.time)}</Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleDiv: {
    padding: 15,
    backgroundColor: "#252d3a"
  }, 
  title: {
    color: "#cacdd6",
  },
  time: {
    fontSize: 12,
    color: "grey"
  }
})