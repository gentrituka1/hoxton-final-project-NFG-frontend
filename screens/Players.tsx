import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Player from "../components/Player";
import { TeamPlayerType } from "./Ranking";

export type PlayerType = {
  id: number;
  team: string;
  nickname: string;
  mapsPlayed: number;
  kd: number;
  rating: number;
}

export default function Players() {
  const [players, setPlayers] = useState<PlayerType[]>([]);
  const [teamPlayer, setTeamPlayer] = useState<TeamPlayerType[]>([]);

  useEffect(() => {
    fetch(`http://10.0.2.2:4001/players`)
    .then((res) => res.json())
    .then((data) => {
      setPlayers(data);
    })
  }, []);

  useEffect(() => {
    fetch(`http://10.0.2.2:4001/teams`)
    .then((res) => res.json())
    .then((data) => {
      setTeamPlayer(data.players)
    })
  }, [])

  return (
    <ScrollView>
      <View>
        <Text>Top Players</Text>
      </View>
      <View>
        {players.map((player) => (
            <Player player={player} teamPlayer={teamPlayer}/>
        ))}
      </View>
    </ScrollView>
  );
}
