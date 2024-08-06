import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { GameCard } from "./GameCard";
import { AnimatedGameCardProps } from "../../interface/gameCard.interface";

export const AnimatedGameCard = ({ game, index }: AnimatedGameCardProps) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);
  return (
    <>
      <Animated.View style={{ opacity }}>
        <GameCard game={game} />
      </Animated.View>
    </>
  );
};
