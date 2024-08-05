import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getBestGames } from "./src/lib/metacriticApi";
import { Game } from "./src/interface/metacrticApi.interface";

export default function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getBestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {
        games.map(game => (
          <View key={game.slug} style={styles.card}> 
            <Image source={{uri: game.image}} style={styles.image} />
            <View>
              <Text style={styles.title}>{game.title}</Text>
              <Text style={styles.description}>{game.description}</Text>

            </View>
          </View>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#333",
    borderRadius: 10,
    width: "100%"
    // flexWrap: 'wrap'

  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 5,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 5,
    color: "#ccc"
  }
});
