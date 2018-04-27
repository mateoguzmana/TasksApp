import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Tr from "../../data/Translations";

import logoImg from "../../images/logo.png";

const Logo = props => {
  const { userData } = props;
  const { currentLang } = userData;

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.image} />
      <Text style={styles.text}>{Tr.appName[currentLang]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 80,
    height: 80
  },
  text: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "transparent",
    marginTop: 20
  }
});

export default Logo;
