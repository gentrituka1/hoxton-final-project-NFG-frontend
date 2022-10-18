import React from 'react'
import { View, Text, Image } from 'react-native'
import { PlayerType } from '../screens/Players'
import { TeamPlayerType } from '../screens/Ranking'

type Props = {
    player: PlayerType
    teamPlayer: TeamPlayerType
}

export default function Player({ player, teamPlayer }: Props) {
  return (
    <View key={player.id}>
            {teamPlayer.nickname === player.nickname ? 
            <Image source={{ uri: teamPlayer.image }} style={{ width: 50, height: 50 }} />
            : null
            }
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
