import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { PlayerType, TeamType } from '../screens/Ranking'

type Props = {
    team: TeamType
}

export default function Team({ team }: Props) {
  return (
    <View>
        <View style={styles.teamContainer}>
            <Text style={styles.text}>{team.ranking}</Text>
            <Image style={styles.image} source={{uri: team.logo}} />
            <Text style={styles.text}>{team.name}</Text>
        </View>
        <View style={styles.playersContainer}>
            {team.players.map((player: PlayerType) => (
                <View style={styles.playersDiv}>
                    <Image style={styles.playersImage} source={{uri: player.image}} />
                    <Text style={styles.playersName}>{player.nickname}</Text>
                </View>
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#252d3a"
    },
    teamContainer: {
        flexDirection: 'row',
        backgroundColor: "lightblue",
        padding: 15
    },
    image: {
        width: 20,
        height: 20,
        marginLeft: 5
    },
    playersContainer: {
        flexDirection: 'row',
        backgroundColor: "#252d3a",
        width: "100%",
        padding: 15,
        justifyContent: 'space-between'
    },
    playersDiv: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    playersImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    playersName: {
        color: "white",
        fontSize: 17
    },
    text: {
        fontSize: 15,
        paddingLeft: 5,
        color: "white"
    }
})