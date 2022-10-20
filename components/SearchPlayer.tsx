import React from 'react'
import { View, Image, Text } from 'react-native';
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
    <View>
        <Image source={!playerTeam ? require('../assets/questionmarkguy.gif') : { uri: playerTeam.image }} style={{ width: 50, height: 50 }} />
        <View>
            <Text>{player.nickname}</Text>
            <Text>{player.team}</Text>
        </View>
        <View>
            <Text>K/D: {player.kd}</Text>
            <Text>Rating: {player.rating}</Text>
            <Text>Maps: {player.mapsPlayed}</Text>
        </View>
    </View>
  )
}
