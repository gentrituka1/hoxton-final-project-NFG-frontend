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
        justifyContent: "space-between",
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
          paddingLeft: 5,
          flexDirection: "column",
          justifyContent: "flex-start",
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
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
          {team.ranking}
        </Text>
        <Text style={{ color: "grey", fontSize: 10, fontWeight: "bold" }}>
          Rank
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 12,
    color: "grey",
  },
});
