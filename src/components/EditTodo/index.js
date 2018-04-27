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
import PropTypes from "prop-types";
import Dimensions from "Dimensions";
import CalendarPicker from "react-native-calendar-picker";
import Tr from "../../data/Translations";

import backIcon from "../../icons/back.png";

const EditTodo = props => {
  const { actions, id, userData } = props;

  const { title, description, startDate, endDate, currentLang } = userData;

  const _onSave = () => {
    let updates = {
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate
    };

    actions.editTodo(id, description);
    actions.startUpdateTodo(id, updates);
    Actions.mainScreen({ type: ActionConst.RESET });
  };

  const _toggleCalendar = () => {
    actions.changeUserData({ openCalendar: !userData.openCalendar });
  };

  const _onDateChange = (date, type) => {
    date = new Date(date);
    if (type === "END_DATE") {
      actions.changeUserData({ endDate: date });
    } else {
      actions.changeUserData({
        startDate: date,
        endDate: null
      });
    }
  };

  const _formatDate = date => {
    let dateObj = new Date(date);

    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    return year + "/" + month + "/" + day;
  };

  const _verifyDelayedTime = date => {
    let lastDate = new Date(date);
    let todaysDate = new Date();

    let timeDiff = todaysDate.getTime() - lastDate.getTime();
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (diffDays > 0) {
      return 1;
    } else if (diffDays < 0) {
      return 2;
    } else if (diffDays == 0) {
      return 3;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputWrapper}>
        <Label text={Tr.title[currentLang]} />
        <TextInput
          style={styles.titleInput}
          autoCapitalize="none"
          maxLength={200}
          autoCorrect={false}
          multiline={true}
          onChangeText={title => actions.changeUserData({ title })}
        >
          <Text style={styles.text}>{title}</Text>
        </TextInput>
      </View>
      <View style={styles.textInputWrapper}>
        <Label text={Tr.description[currentLang]} />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          maxLength={200}
          autoCorrect={false}
          multiline={true}
          onChangeText={description => actions.changeUserData({ description })}
        >
          <Text style={styles.text}>{description}</Text>
        </TextInput>
      </View>
      <View style={styles.labelDatesWrapper}>
        <Label style={styles.dateLabel} text={Tr.startDate[currentLang]} />
        <Label style={styles.dateLabel} text={Tr.endDate[currentLang]} />
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
          <Text style={styles.text}>
            {startDate ? _formatDate(startDate) : Tr.startDate[currentLang]}
          </Text>
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
          <Text style={styles.text}>
            {endDate ? _formatDate(endDate) : Tr.endDate[currentLang]}
          </Text>
        </TextInput>
      </View>
      {userData.openCalendar ? (
        <View style={styles.calendar}>
          <CalendarPicker
            allowRangeSelection={true}
            onDateChange={_onDateChange}
          />
        </View>
      ) : null}
      <View style={styles.btnWrapper}>
        {userData.openCalendar ? (
          <TouchableOpacity
            onPress={_toggleCalendar}
            activeOpacity={0.5}
            style={styles.closeCalendarBtn}
          >
            <Text style={styles.closeCalendarText}>{Tr.closeCalendar[currentLang]}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={_onSave}
            activeOpacity={0.5}
            style={styles.btn}
          >
            <Image source={backIcon} style={styles.image} />
          </TouchableOpacity>
        )}
      </View>
      <Tag type={_verifyDelayedTime(endDate)} currentLang={currentLang}/>
    </View>
  );
};

const Label = props => {
  const { style, text } = props;
  return <Text style={[styles.label, style]}>{text}</Text>;
};

const Tag = props => {
  const { currentLang, style, type } = props;

  const timeTypes = {
    1: Tr.warningText[currentLang],
    2: Tr.successText[currentLang],
    3: Tr.warningText[currentLang]
  };

  const color = {
    1: "rgba(224, 18, 52, 0.9);",
    2: "rgba(128, 157, 115, 0.9);",
    3: "rgba(243, 189, 19, 0.9);"
  };

  return (
    <View style={[styles.tagsWrapper, { backgroundColor: color[type] }]}>
      <Text style={[styles.tagText, style]}>{timeTypes[type]}</Text>
    </View>
  );
};

EditTodo.propTypes = {
  actions: PropTypes.object,
  visibilityFilter: PropTypes.string,
  userData: PropTypes.object,
  id: PropTypes.string,
  text: PropTypes.string
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.any
};

Tag.propTypes = {
  type: PropTypes.number,
  style: PropTypes.any,
  currentLang: PropTypes.string
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
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.3)"
  },
  image: {
    width: 35,
    height: 35
  },
  calendar: {
    marginTop: 20
  },
  label: {
    fontSize: 16,
    color: "black",
    backgroundColor: "transparent",
    marginBottom: 5
  },
  labelDatesWrapper: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10
  },
  dateLabel: {
    width: width * 0.45,
    marginRight: width * 0.02
  },
  closeCalendarBtn: {
    backgroundColor: "transparent",
    marginHorizontal: 15
  },
  closeCalendarText: {
    color: "white",
    fontSize: 15
  },
  tagsWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    marginTop: 10,
    height: 30,
  },
  tagText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    width: width * 0.92
  }
});

export default EditTodo;
