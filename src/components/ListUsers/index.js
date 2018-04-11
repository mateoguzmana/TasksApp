import React from "react";
import PropTypes from "prop-types";
import { Actions, ActionConst } from "react-native-router-flux";
import { StyleSheet, View } from "react-native";

import List from "./List";
import iconCheck from "../../icons/check.png";
import iconUncheck from "../../icons/uncheck.png";
import iconView from "../../icons/view.png";

const UserList = props => {
  const { users, actions } = props;

  const _viewUserTodo = id => {
    actions.deleteAllTodo();
    actions.fetchTodos(id);
    actions.changeUserData({ mainScreen: "user", userToEdit: id });
  };

  const _rightOnPress = id => event => _viewUserTodo(id);

  return (
    <View style={styles.container}>
      <List
        users={users}
        leftUnactiveIcon={iconUncheck}
        leftActiveIcon={iconCheck}
        rightOnPress={_rightOnPress}
        rightIcon={iconView}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
  }
});

UserList.propTypes = {
  users: PropTypes.array,
  actions: PropTypes.object.isRequired
};

export default UserList;
