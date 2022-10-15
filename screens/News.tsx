import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SingleNews from '../components/SingleNews';

type SingleNews = {
  id: number;
  title: string;
  description: string;
  link: string;
  time: string;
}

export default function News() {
  const [news, setNews] = useState<SingleNews[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4001/news`)
    .then(res => res.json())
    .then(newsFromServer => setNews(newsFromServer))
    .catch((err) => alert(["Error: " + err.message]))
  }, [])

  return (
    <View style={styles.container}>
      <Text>Something</Text>
      {news.map((item) => (
        <SingleNews item={item}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: 'blue',
    alignItems: 'center',
  }
})
