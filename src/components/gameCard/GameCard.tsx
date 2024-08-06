import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  Animated,
} from "react-native";
import { GameCardProps } from "../../interface/gameCard.interface";

const { width } = Dimensions.get("screen");

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <View style={styles.card}>
      <View>
        <Image source={{ uri: game.image }} style={styles.image} />
      </View>
      <View>
        <Text style={styles.title} numberOfLines={2}>
          {game.title}
        </Text>
        <Text style={styles.description} numberOfLines={6}>
          {game.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#171717",
  },
  image: {
    width: width * 0.25,
    height: 147,
    objectFit: "cover",
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    width: width * 0.65,
    maxWidth: "100%",
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 10,
    color: "#ccc",
    width: width * 0.65,
    maxWidth: "100%",
  },
});
