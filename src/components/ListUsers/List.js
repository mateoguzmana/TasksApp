import React, { PropTypes } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Platform
} from "react-native";

import ButtonIcon from "../Buttons/ButtonIcon";

const List = props => {
  const {
    users,
    actions,
    leftOnPress,
    leftUnactiveIcon,
    leftActiveIcon,
    rightOnPress,
    rightIcon,
    iconDelete,
    onDelete,
    textOnPress
  } = props;

  const _renderList = (user, index) => {
    return (
      <View key={index} style={styles.row}>
{/*         <ButtonIcon
          onPress={leftOnPress(user.email, user.email)}
          source={leftActiveIcon}
          style={styles.leftButton}
          width={25}
          height={25}
        /> */}
        <View style={styles.leftButton}></View>
        <TouchableOpacity
          onPress={textOnPress(user.email, user.email)}
          style={styles.textButton}
          activeOpacity={0.7}
        >
          <Text numberOfLines={1} style={styles.textNotDone}>
            {user.email}
          </Text>
        </TouchableOpacity>
        <ButtonIcon
          onPress={rightOnPress(user.id)}
          source={rightIcon}
          style={styles.rightButton}
          width={25}
          height={25}
        />
      </View>
    );
  };

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      {users.map(_renderList)}
    </ScrollView>
  );
};

const marginBottom = Platform.OS === "ios" ? 20 : 0;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginBottom: marginBottom
  },
  textButton: {
    flex: 1
  },
  textNotDone: {
    color: "white"
  },
  textDone: {
    color: "white",
    textDecorationLine: "line-through"
  },
  leftButton: {
    marginHorizontal: 10
  },
  rightButton: {
    marginLeft: 5,
    marginRight: 10
  },
  row: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 40,
    marginHorizontal: 10,
    marginVertical: 1,
    borderRadius: 2,
    backgroundColor: "rgba(255, 255, 255, 0.3)"
  }
});

List.propTypes = {
  style: PropTypes.number,
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  leftOnPress: PropTypes.func.isRequired,
  leftUnactiveIcon: PropTypes.number.isRequired,
  leftActiveIcon: PropTypes.number.isRequired,
  rightOnPress: PropTypes.func.isRequired,
  rightIcon: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  iconDelete: PropTypes.number.isRequired,
  textOnPress: PropTypes.func.isRequired
};

export default List;
