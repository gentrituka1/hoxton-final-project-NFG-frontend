import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';
import { PlayerType } from '../screens/Players';
import { TeamPlayerType } from '../screens/Ranking';

type Props = {
    teamPlayers: TeamPlayerType[];
    player: PlayerType;
}

export default function SearchPlayer( { teamPlayers, player }: Props ) {

    const playerTeam = teamPlayers.find(
        (teamPlayer) => teamPlayer.nickname === player.nickname
      );
  return (
    <View style={styles.container}>
        <Image source={!playerTeam ? require('../assets/questionmarkguy.gif') : { uri: playerTeam.image }} style={{ width: 100, height: 100, borderRadius: 40 }} />
        <View style={{paddingLeft: 10, flexDirection: "column", width: "55%", justifyContent:"space-evenly", alignItems:"center"}}>
            <Text style={{color: "lightblue", fontWeight:"bold", fontSize: 20}}>{player.nickname}</Text>
            <Text style={{color: "darkgrey", fontWeight: "bold"}}>{player.team}</Text>
        </View>
        <View style={{justifyContent: "center"}}>
            <Text style={styles.text}>K/D: {player.kd}</Text>
            <Text style={styles.text}>Rating: {player.rating}</Text>
            <Text style={styles.text}>Maps: {player.mapsPlayed}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 1, 
        borderBottomColor: "grey",
        backgroundColor: "#3b4d45"
    },
    text: {
        color: "white"
    }

})