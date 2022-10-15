import React from 'react'
import { View, Text } from 'react-native'



export default function SingleNews(item: any) {
  return (
    <View key={item.id}>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text>{item.link}</Text>
          <Text>{item.time}</Text>
    </View>
  )
}
