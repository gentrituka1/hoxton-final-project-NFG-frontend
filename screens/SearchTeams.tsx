import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import SearchTeam from '../components/SearchTeam';
import { TeamType } from './Ranking';

export default function SearchTeams() {
    const [searchTeams, setSearchTeams] = React.useState<TeamType[]>([]);

    useEffect(() => {
        fetch(`http://10.0.2.2:4001/teams`)
            .then((response) => response.json())
            .then((data) => setSearchTeams(data))
    }, [])

  return (
    <ScrollView>
        <View>
            <Text style={{padding: 10, backgroundColor: "#35495ef0", color: "white", fontSize: 12, fontWeight: "bold"}}>Most Popular</Text>
        </View>
        <View>
         {searchTeams.map((team) => (
             <SearchTeam team={team} backgroundColour="#3b4d45"/>
            ))
            }
        </View>
    </ScrollView>
  )
}
