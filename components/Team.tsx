import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SvgUri } from "react-native-svg";
import { TeamPlayerType, TeamType } from "../screens/Ranking";

type Props = {
  team: TeamType;
};

export default function Team({ team }: Props) {
  return (
    <View>
      <View style={styles.teamContainer}>
        <Text style={styles.text}>{team.ranking}</Text>
        {/* <Image style={styles.image} source={{uri: team.logo}}/> */}
        {team.logo.includes(".svg") ? (
          <Image style={styles.image} source={require("../assets/questionmarkguy.gif")} />
        ) : (
          <Image style={styles.image} source={{ uri: team.logo }} />
        )}
        <Text style={styles.text}>{team.name}</Text>
      </View>
      <View style={styles.playersContainer}>
        {team.players.map((player: TeamPlayerType, index) => (
          <View key={index} style={styles.playersDiv}>
            <Image style={styles.playersImage} source={{ uri: player.image }} />
            <Text style={styles.playersName}>{player.nickname}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252d3a",
  },
  teamContainer: {
    flexDirection: "row",
    backgroundColor: "#252d3a60",
    padding: 15
  },
  image: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  playersContainer: {
    flexDirection: "row",
    backgroundColor: "#252d3a",
    width: "100%",
    padding: 15,
    justifyContent: "space-between",
  },
  playersDiv: {
    flexDirection: "column",
    alignItems: "center",
  },
  playersImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  playersName: {
    color: "white",
    fontSize: 17,
  },
  text: {
    fontSize: 17,
    paddingLeft: 5,
    color: "white",
    fontWeight: "bold",
  },
});
