import React from "react";
import { StyleSheet, View } from "react-native";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <Logo />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 20
  },
});
