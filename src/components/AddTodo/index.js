import React from "react";
import Dimensions from "Dimensions";
import { View, TextInput, StyleSheet } from "react-native";
import Tr from "../../data/Translations";

import plusIcon from "../../icons/plus.png";
import ButtonIcon from "../Buttons/ButtonIcon";

const DEVICE_WIDTH = Dimensions.get("window").width;

const AddTodo = props => {
  const { actions, userData } = props;
  const { currentLang } = userData;

  let textInput;
  let textValue = "";

  const _onSubmitEditing = () => {
    if (textValue.length > 0) {
      actions.startAddTodo(userData.userToEdit, textValue);
    }
    textInput.clear();
  };

  const _onChangeText = text => (textValue = text);

  const getInput = mainScreen => {
    switch (mainScreen) {
      case "admin":
        return <View style={styles.container} />;

      case "user":
        return addTodo;

      default:
        return addTodo;
    }
  };

  const addTodo = (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        maxLength={200}
        placeholder={Tr.addTask[currentLang]}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        returnKeyType="done"
        onChangeText={_onChangeText}
        onSubmitEditing={_onSubmitEditing}
        ref={el => (textInput = el)}
      />
      <ButtonIcon
        onPress={_onSubmitEditing}
        source={plusIcon}
        style={styles.plusButton}
        width={30}
        height={30}
      />
    </View>
  );

  return getInput(userData.mainScreen);
};

const styles = StyleSheet.create({
  container: {
    flex: 0
  },
  plusButton: {
    marginRight: 15,
    marginTop: -35,
    alignItems: "flex-end"
  },
  textInput: {
    alignSelf: "center",
    height: 40,
    width: DEVICE_WIDTH - 20,
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 35,
    color: "white",
    borderRadius: 2,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  }
});

export default AddTodo;
