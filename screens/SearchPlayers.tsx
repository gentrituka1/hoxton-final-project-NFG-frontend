import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import ReusableSpinnyBoi from '../components/ReusableSpinnyBoi'
import SearchPlayer from '../components/SearchPlayer'
import { PlayerType } from './Players'
import { TeamPlayerType } from './Ranking'


export default function SearchPlayers() {
  const [players, setPlayers] = React.useState<PlayerType[]>([])
  const [teamPlayers, setTeamPlayers] = React.useState<TeamPlayerType[]>([])

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
    .then((teamsFromServer) => {
      setTeamPlayers(teamsFromServer.map((team: any) => team.players).flat())
    })
  }, [])

  

  if (players.length === 0) {
    return (
     <ReusableSpinnyBoi text="players" />
    )
   }

   
  return (
    <ScrollView>
        {players.map((player) => (
            <SearchPlayer key={player.id} player={player} teamPlayers={teamPlayers}/>
        ))}
    </ScrollView>
  )
}
