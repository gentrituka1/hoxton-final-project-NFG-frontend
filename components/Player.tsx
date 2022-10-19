import React from 'react'
import { View, Text, Image } from 'react-native'
import { PlayerType } from '../screens/Players'
import { TeamPlayerType } from '../screens/Ranking'

type Props = {
    player: PlayerType
    teamPlayers: TeamPlayerType[]
}

export default function Player({ player, teamPlayers }: Props) {

    const playerTeam = teamPlayers.find((teamPlayer) => teamPlayer.nickname === player.nickname)
  return (
    <View key={player.id}>
            {playerTeam && <Image source={{ uri: playerTeam.image }} style={{ width: 50, height: 50 }} />}
            <View>
              <Text>{player.nickname}</Text>
              <Text>{player.team}</Text>
            </View>
            <View>
              <Text>{player.kd}</Text>
              <Text>Rating: {player.rating}</Text>
            </View>
    </View>
  )
}
