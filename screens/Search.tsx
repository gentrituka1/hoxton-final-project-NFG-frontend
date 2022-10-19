import React from 'react'
import { View, ScrollView, StyleSheet, Button } from 'react-native'

export default function Search() {


    const color = "#1f252c";
  return (
    <ScrollView>
        <View>
            <Button color={color} title={"Teams"} onPress={() => {

            }}></Button>
            <Button color={color} title={"Players"} onPress={() => {}}></Button>
        </View>
        <View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {

    },
})