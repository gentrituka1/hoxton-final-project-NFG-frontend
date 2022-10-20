import React, { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";

type Props = {
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
}

export default function Settings( {hidden, setHidden}: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{backgroundColor: "#435971", padding: 10, color: "white", fontWeight: "bold"}}>General</Text>
      </View>
      <View style={{backgroundColor: "#1b1f23", justifyContent: "center", alignItems: "center", padding: 15}}>
      <Button
        title="Hide/Show StatusBar"
        color="#435971"
        onPress={() => {
          setHidden(!hidden);
        }}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "darkgrey",
  }
})