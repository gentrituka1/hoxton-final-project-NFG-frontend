import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { timeElapsed } from '../utils/utils';


export default function SingleNews({item}: any) {
  return (
    <View>
          <Image source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/006/985/153/small_2x/nfg-letter-logo-design-on-black-background-nfg-creative-initials-letter-logo-concept-nfg-letter-design-vector.jpg'}} style={{width: "100%", height: 250}} />
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