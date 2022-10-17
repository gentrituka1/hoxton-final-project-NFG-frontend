import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Match from '../components/Match'

export type MatchType = {
  id: number
  time: string
  event: {
    name: string
    logo: string
  }
  stars: number
  maps: string
  teams: {
    id: number
    name: string
    logo: string
  }
}

export default function Matches() {
  const [matches, setMatches] = React.useState<MatchType[]>([])

  useEffect(() => {
    fetch("http://10.0.2.2:4001/matches")
    .then(res => res.json())
    .then(data => setMatches(data))
  }, [])

  return (
    <ScrollView>
      {matches.map(match => (
        <Match match={match}/>
      ))}
    </ScrollView>
  )
}
