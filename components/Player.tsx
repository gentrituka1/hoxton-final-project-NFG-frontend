import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { PlayerType } from "../screens/Players";
import { TeamPlayerType } from "../screens/Ranking";

type Props = {
  player: PlayerType;
  teamPlayers: TeamPlayerType[];
};

export default function Player({ player, teamPlayers }: Props) {

  const playerTeam = teamPlayers.find(
    (teamPlayer) => teamPlayer.nickname === player.nickname
  );

    // create a function that gives a different background color to even players

    let backgroundColor = ""
    if(player.rating >= 1.2){
      backgroundColor = "#1b1f23"
    } else {
      backgroundColor = "#3b4d61"
    }

  return (
    <View style={{padding: 10, backgroundColor: backgroundColor ,flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "grey"}}>
      <Image
        source={!playerTeam ? require("../assets/questionmarkguy.gif") : { uri: playerTeam.image }}
        style={{ width: 50, height: 50, borderRadius: 30 }}
      />
      <View style={{flexDirection: "row", width: "88%", paddingLeft: 10, justifyContent: "space-between", alignItems: "center"}}>
        <View >
          <Text style={{fontWeight: "bold", color: "white"}}>{player.nickname}</Text>
          <Text style={{fontSize: 12, fontWeight: "bold", color: "grey"}}>{player.team}</Text>
        </View>
        <View style={{alignItems: "center"}}>
          <Text>{player.kd}</Text>
          <Text>Rating: {player.rating}</Text>
        </View>
      </View>
    </View>
  );
}
