import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'



const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
            if (user) {
                // @ts-ignore
                navigation.replace('News')
            }
        })
        
        return unsubscribe
    },[])

    
    function handleLogIn(){
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredentials: any ) => {
            const user = userCredentials.user;
            console.log('Logged in with', user.email)
        })
        .catch((error: any) =>
            // @ts-ignore
             alert(error.message)
        )
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" value ={email} onChangeText={text => setEmail(text)} style={styles.input}/>
        <TextInput placeholder="Password" value ={password} onChangeText={text => setPassword(text) } style={styles.input} secureTextEntry/>
      </View>
      <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogIn}
            style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => {
                // @ts-ignore
                navigation.navigate('Signup')
            }}
            style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}>Sign Up</Text>
            </TouchableOpacity> 
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

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