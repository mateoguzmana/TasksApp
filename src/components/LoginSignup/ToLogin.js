import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Actions, ActionConst } from "react-native-router-flux";
import Tr from "../../data/Translations";

const ToLogin = props => {
  const { userData } = props;
  const { currentLang } = userData;

  const _onPress = () => {
    Actions.loginScreen({ type: ActionConst.BACK });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={_onPress} style={styles.button}>
        <Text style={styles.text}>{Tr.iHaveAnAccount[currentLang]}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center"
  },
  button: {
    alignItems: "center"
  },
  text: {
    color: "white",
    backgroundColor: "transparent"
  }
});

export default ToLogin;
