import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import ButtonFilter from "../Buttons/ButtonFilter";
import Tr from "../../data/Translations";

const Visibility = props => {
  const { userData } = props;
  const { currentLang } = userData;

  const getFilters = mainScreen => {
    switch (mainScreen) {
      case "admin":
        return <View style={styles.container} />;

      case "user":
        return filtersTodos;

      default:
        return filtersTodos;
    }
  };

  const filtersTodos = (
    <View style={styles.container}>
      <ButtonFilter
        filter="SHOW_ALL"
        txtStyle={styles.text}
        activeStyle={styles.btnClicked}
        UnactiveStyle={styles.btnUnclicked}
        activeOpacity={0.7}
        {...props}
      >
        {Tr.viewAll[currentLang]}
      </ButtonFilter>
      <ButtonFilter
        filter="SHOW_ACTIVE"
        txtStyle={styles.text}
        activeStyle={styles.btnClicked}
        UnactiveStyle={styles.btnUnclicked}
        activeOpacity={0.7}
        {...props}
      >
        {Tr.active[currentLang]}
      </ButtonFilter>
      <ButtonFilter
        filter="SHOW_COMPLETED"
        txtStyle={styles.text}
        activeStyle={styles.btnClicked}
        UnactiveStyle={styles.btnUnclicked}
        activeOpacity={0.7}
        {...props}
      >
        {Tr.completed[currentLang]}
      </ButtonFilter>
      <ButtonFilter
        filter="SHOW_FAVORITE"
        txtStyle={styles.text}
        activeStyle={styles.btnClicked}
        UnactiveStyle={styles.btnUnclicked}
        activeOpacity={0.7}
        {...props}
      >
        {Tr.favorited[currentLang]}
      </ButtonFilter>
    </View>
  );

  return getFilters(userData.mainScreen);
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    marginBottom: 10
  },
  text: {
    margin: 5,
    color: "white",
    backgroundColor: "transparent"
  },
  btnClicked: {
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  btnUnclicked: {
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.3)"
  }
});

export default Visibility;
