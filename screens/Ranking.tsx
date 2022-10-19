import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import ReusableSpinnyBoi from '../components/ReusableSpinnyBoi'
import Team from '../components/Team'

export type TeamPlayerType = {
  fullname: string
  image: string
  nickname: string
  country: {
    name: string
    flag: string
  }
}

export type TeamType = {
  id: number
  ranking: number
  name: string
  logo: string
  players: TeamPlayerType[]
}

export default function Ranking() {
  const [topTeams, setTopTeams] = useState<TeamType[]>([]);

  useEffect(() => {
    fetch(`http://10.0.2.2:4001/teams`)
      .then((res) => res.json())
      .then((data) => {
        setTopTeams(data);
      })
  }, [])

  if(topTeams.length === 0) {
    return <ReusableSpinnyBoi text="teams"/>
  }

  return (
    <ScrollView>
      {topTeams.map((team) => (
        <Team key={team.id} team={team} />
      ))}
    </ScrollView>
  )
}
