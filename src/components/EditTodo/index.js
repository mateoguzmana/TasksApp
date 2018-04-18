import React from "react";
import { Actions, ActionConst } from "react-native-router-flux";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import Dimensions from "Dimensions";
import CalendarPicker from "react-native-calendar-picker";

import backIcon from "../../icons/back.png";

const EditTodo = props => {
  const { todos, actions, id, text, userData } = props;

  let textValue = text;

  const _onPress = () => {
    actions.editTodo(id, textValue);
    actions.startUpdateTodo(id, "text", textValue);
    Actions.mainScreen({ type: ActionConst.RESET });
  };

  const _onChangeText = value => (textValue = value);
  
  const _toggleCalendar = () => {
	actions.changeUserData({ openCalendar: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.titleInput}
          onChangeText={() => {}}
          autoCapitalize="none"
          maxLength={200}
          autoCorrect={false}
          multiline={true}
        >
          <Text style={styles.text}>{text == 4 ? text : "Title"}</Text>
        </TextInput>
      </View>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={_onChangeText}
          autoCapitalize="none"
          maxLength={200}
          autoCorrect={false}
          multiline={true}
        >
          <Text style={styles.text}>{text}</Text>
        </TextInput>
      </View>
      <View style={styles.datesWrapper}>
        <TextInput
          style={styles.dateInput}
          onFocus={_toggleCalendar}
          onChangeText={() => {}}
          autoCapitalize="none"
          maxLength={200}
          autoCorrect={false}
          multiline={true}
        >
          <Text style={styles.text}>{text == 4 ? text : "date"}</Text>
        </TextInput>
        <TextInput
          style={styles.dateInput}
          onFocus={_toggleCalendar}
          onChangeText={() => {}}
          autoCapitalize="none"
          maxLength={200}
          autoCorrect={false}
          multiline={true}
        >
          <Text style={styles.text}>{text == 4 ? text : "date"}</Text>
        </TextInput>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={_onPress}
          activeOpacity={0.5}
          style={styles.btn}
        >
          <Image source={backIcon} style={styles.image} />
        </TouchableOpacity>
      </View>
      {userData.openCalendar ? (
        <CalendarPicker onDateChange={this.onDateChange} />
      ) : null}
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInputWrapper: {
    marginTop: 20,
    marginHorizontal: 15
  },
  textInput: {
    height: 100,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  text: {
    color: "white",
    backgroundColor: "transparent"
  },
  titleInput: {
    height: 30,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  datesWrapper: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 15
  },
  dateInput: {
    height: 30,
    width: width * 0.45,
    paddingHorizontal: 10,
    marginRight: width * 0.02,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  btnWrapper: {
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  btn: {
    margin: 20,
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.3)"
  },
  image: {
    width: 40,
    height: 40
  }
});

export default EditTodo;
