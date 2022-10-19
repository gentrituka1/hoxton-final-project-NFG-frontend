import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ReusableSpinnyBoi from "../components/ReusableSpinnyBoi";
import SingleNews from "../components/SingleNews";

type SingleNewsType = {
  id: number;
  title: string;
  description: string;
  time: string;
};

export default function News() {
  const [news, setNews] = useState<SingleNewsType[]>([]);

  useEffect(() => {
    fetch(`http://10.0.2.2:4001/news`)
    .then(res => res.json())
    .then(newsFromServer => {
      setNews(newsFromServer)})
  }, [])

  if(news.length === 0) {
    return <ReusableSpinnyBoi text="news"/>
  }

  return (
    <ScrollView>
      {news.map((item) => (
        <SingleNews key={item.id} item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});
