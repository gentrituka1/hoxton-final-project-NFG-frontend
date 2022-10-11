import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import { Navbar } from '../App'

type Props = {
    navbar: Navbar[]
}

export default function Navbar( {navbar}: Props) {
  return (
    <View style={styles.nav}>
        {navbar.map((item) => {
          return (
            <Button key={item.id} title={item.name}  />
          )
        })}
      </View>
  )
}

const styles = StyleSheet.create({
    nav:{
      flexDirection: 'row',
      padding: 10,
      backgroundColor: 'lightblue',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'flex-end'
    },
  });
