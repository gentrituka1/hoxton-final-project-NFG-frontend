import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Team from '../components/Team'

type Player = {
  fullName: string
  image: string
  nickName: string
  country: {
    name: string
    flag: string
  }
}

type Team = {
  id: number
  ranking: number
  name: string
  logo: string
  players: Player[]
}

export default function Ranking() {
  const [topTeams, setTopTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch(`http://10.0.2.2:4001/teams`)
      .then((res) => res.json())
      .then((data) => {
        setTopTeams(data);
      })
  }, [])

  return (
    <View>
      {topTeams.map((team) => (
        <Team key={team.id} team={team} />
      ))}
    </View>
  )
}
