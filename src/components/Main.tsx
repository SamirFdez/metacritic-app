import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Header } from "./Header";
import { AnimatedGameCard } from "./gameCard/AnimatedGameCard";
import { getBestGames } from "../lib/metacriticApi";
import { Game } from "../interface/metacrticApi.interface";

export function Main() {
  const insets = useSafeAreaInsets();
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getBestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Header />
      {!games.length ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
        />
      )}
    </View>
  );
}
