import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native'
import { auth } from '../firebase'

export default function Signup() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')

  const navigation = useNavigation()

  function handleSignUp(){
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredentials: any) => {
        const user = userCredentials.user;
        console.log(`Registered with ${user.email} and ${user.displayName}`)
    })
    .catch((error: any) =>
        // @ts-ignore
         alert(error.message)
    )
} 

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput placeholder="Name" value ={name} onChangeText={text => setName(text) } style={styles.input}/>
        <TextInput placeholder="Email" value ={email} onChangeText={text => setEmail(text)} style={styles.input}/>
        <TextInput placeholder="Password" value ={password} onChangeText={text => setPassword(text) } style={styles.input} secureTextEntry/>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity> 
        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  inputContainer: {
      width: "80%",
  },
  input: {
      backgroundColor: "white",
      paddingHorizonal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      paddingLeft: 10
  },
  buttonContainer: {
      width: "60%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40,
  },
  button: {
      background: "#0782F9",
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
  },
  buttonText: {
      color: "#0782F9",
      fontWeight: "700",
      fontSize: 16
  },
  buttonOutline: {
      backgroundColor: "white",
      marginTop: 5,
      borderColor: "#0782F9",
      borderWidth: 2,
  },
  buttonOutlineText: {
      color: "#0782F9",
      fontWeight: "700",
      fontSize: 16
  },
})
