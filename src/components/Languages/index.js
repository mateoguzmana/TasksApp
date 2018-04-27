import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import enFlag from "../../images/enFlag.png";
import spFlag from "../../images/spFlag.png";
import deFlag from "../../images/deFlag.png";
import ptFlag from "../../images/ptFlag.png";

const Languages = props => {
  const { actions } = props;

  const _onChangeLanguage = lang => {
    actions.changeUserData({ currentLang: lang });
  };

  const _renderFlag = (flag, i) => {
    return (
      <TouchableOpacity key={i} onPress={() => _onChangeLanguage(flag.id)}>
        <Flag style={styles.flag} source={flag.source} />
      </TouchableOpacity>
    );
  };

  return <View style={styles.container}>{flags.map(_renderFlag)}</View>;
};

const Flag = props => {
  const { source } = props;
  return <Image style={styles.flag} source={source} />;
};

Languages.propTypes = {
  actions: PropTypes.object,
  userData: PropTypes.object
};

Flag.propTypes = {
  source: PropTypes.any.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15
  },
  flag: {
    height: 20,
    width: 25,
    marginHorizontal: 5
  }
});

const flags = [
  {
    id: "en",
    source: enFlag
  },
  {
    id: "de",
    source: deFlag
  },
  {
    id: "sp",
    source: spFlag
  },
  {
    id: "pt",
    source: ptFlag
  }
];

export default Languages;
