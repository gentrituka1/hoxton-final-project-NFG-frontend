import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TeamType } from "../screens/Ranking";

type Props = {
  team: TeamType;
  backgroundColour: string;
};

export default function SearchTeam({ team, backgroundColour }: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: backgroundColour,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
      }}
    >
      {team.logo.includes(".svg") ? (
        <Image
          style={styles.image}
          source={require("../assets/questionmarkguy.gif")}
        />
      ) : (
        <Image style={styles.image} source={{ uri: team.logo }} />
      )}

      <View
        style={{
          paddingLeft: 10,
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "82%"
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>{team.name}</Text>
        <View style={{ flexDirection: "row" }}>
          {team.players.map((player) => (
            <>
              <Text style={styles.text}>{player.nickname} ~</Text>
            </>
          ))}
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
          {team.ranking}
        </Text>
        <Text style={{ color: "darkgrey", fontSize: 10, fontWeight: "bold" }}>
          Rank
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#ffffb0"
  },
  text: {
    fontSize: 12,
    color: "darkgrey",
  },
});
