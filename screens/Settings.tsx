import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import { auth } from '../firebase'

type Props = {
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
}

export default function Settings( {hidden, setHidden}: Props) {
  const navigation = useNavigation();

  function signOut(){
    auth.signOut().then(() => {
      console.log('Signed Out')
      // @ts-ignore
      navigation.replace('Login')
    }).catch((error: any) => {
      console.error(error)
    })
  }

  const currentUser = auth.currentUser

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
      <View>
        <Text style={{backgroundColor: "#435971", padding: 10, color: "white", fontWeight: "bold"}}>Welcome back, {currentUser?.displayName}!</Text>
      </View>
      <View style={{backgroundColor: "#1b1f23", justifyContent: "center", alignItems: "center", padding: 15}}>
        {currentUser === null ? (
            <Button
              title="Log In/Sign Up"
              color="#435971"
              onPress={() => {
                // @ts-ignore
                navigation.navigate("Login");
              }}
            /> 
        ) : (
          <>
            <Text style={{paddingBottom: 10, color: "lightblue"}}>You are signed in.</Text>
            <Button
            title="Sign Out"
            color="#435971"
            onPress={signOut}
            /> 
          </>
        )}
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