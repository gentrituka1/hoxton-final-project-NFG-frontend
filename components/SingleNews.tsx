import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function SingleNews({item}: any) {

  function timeElapsed(time: string){
    const currentTime = new Date();
    const newsTime = new Date(time);
    const difference = currentTime.getTime() - newsTime.getTime();
    const minutes = Math.floor(difference / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30); 
    const years = Math.floor(days / 365);
    if (minutes < 60) {
      if(minutes === 1) return `${minutes} minute ago` 
      else return `${minutes} minutes ago`;
    }
    else if (hours < 24) {
      if(hours === 1) return `${hours} hour ago`
      else return `${hours} hours ago`;
    }
    else if (days < 7) {
      if(days === 1) return `${days} day ago`
      else return `${days} days ago`;
    }
    else if (weeks < 4) {
      if(weeks === 1) return `${weeks} week ago`
      else return `${weeks} weeks ago`;
    }
    else if (months < 12) {
      if(months === 1) return `${months} month ago`
      else return `${months} months ago`;
    }
    else {
      if(years === 1) return `${years} year ago`
      else return `${years} years ago`;
    }
  }
  
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