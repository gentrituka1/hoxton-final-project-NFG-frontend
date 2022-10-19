import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { checkTimeIfToday, timeConverter, timeElapsed } from "../utils/utils";
import ReusableSpinnyBoi from "./ReusableSpinnyBoi";

export default function Match({ match }: any) {

  return (
    <View style={styles.container}>
      <View style={styles.singleContainer}>
        <Image style={styles.image} source={{ uri: match.event.logo }} />
        <Text style={styles.text}>{match.event.name}</Text>
        <Text style={styles.text}>| {match.maps}</Text>
      </View>
      <View style={styles.timeContainer}>
        <View>
          <View style={styles.teamContainer}>
            <Image style={styles.image} source={{ uri: match.teams[0].logo }} />
            <Text style={styles.teamNames}>{match.teams[0].name}</Text>
          </View>
          <View style={styles.teamContainer}>
            <Image style={styles.image} source={{ uri: match.teams[1].logo }} />
            <Text style={styles.teamNames}>{match.teams[1].name}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.timeText}>
            {
              checkTimeIfToday(match.time) === "Today"
                ? null
                : checkTimeIfToday(match.time)
            }{" "}
            {timeConverter(match.time)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    borderBottomWidth: 1,
    borderColor: "grey",
    backgroundColor: "#252d3a"
  },
  singleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 15,
    height: 15,
  },
  text: {
    fontSize: 10,
    paddingLeft: 5,
    color: "grey"
  },
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 5,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  teamNames: {
    fontSize: 10,
    paddingLeft: 5,
    color: "#d9d8d7"
  },
  timeText: {
    color: "lightblue",
    fontSize: 13
  }
});
