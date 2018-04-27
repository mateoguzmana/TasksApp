import React from "react";
import PropTypes from "prop-types";
import { Actions, ActionConst } from "react-native-router-flux";
import { StyleSheet, View } from "react-native";

import List from "./List";
import iconCheck from "../../icons/check.png";
import iconUncheck from "../../icons/uncheck.png";
import iconStar from "../../icons/star.png";
import iconUnStar from "../../icons/unstar.png";
import iconDelete from "../../icons/remove.png";

const TodoList = props => {
  const { todos, actions, visibilityFilter, userData } = props;

  const getVisibleTodos = (allTodos, whatFilter) => {
    switch (whatFilter) {
      case "SHOW_ALL":
        return allTodos;
      case "SHOW_COMPLETED":
        return allTodos.filter(t => t.isDone);
      case "SHOW_ACTIVE":
        return allTodos.filter(t => !t.isDone);
      case "SHOW_FAVORITE":
        return allTodos.filter(t => t.isStarred);
    }
  };

  const visibleTodos = getVisibleTodos(todos, visibilityFilter);

  const _leftOnPress = (id, isDone) => event =>
    actions.startUpdateTodo(id, "isDone", !isDone);
  const _rightOnPress = (id, isStarred) => event =>
    actions.startUpdateTodo(id, "isStarred", !isStarred);
  const _onDelete = id => event => actions.startRemoveTodo(id);

  const _getTodoData = id => actions.getTodoData(userData.userToEdit, id);

  const _textOnPress = (id) => event => {
    _getTodoData(id).on("value", snap => {
      let data = snap.val();

      let { title, description, startDate, endDate } = data;

      actions.changeUserData({
        title: title,
        description: description,
        startDate: startDate,
        endDate: endDate
      });
    });

    Actions.editScreen({
      type: ActionConst.PUSH,
      id
    });
  };

  return (
    <View style={styles.container}>
      <List
        visibleTodos={visibleTodos}
        leftOnPress={_leftOnPress}
        leftUnactiveIcon={iconUncheck}
        leftActiveIcon={iconCheck}
        rightOnPress={_rightOnPress}
        rightUnactiveIcon={iconUnStar}
        rightActiveIcon={iconStar}
        textOnPress={_textOnPress}
        onDelete={_onDelete}
        iconDelete={iconDelete}
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

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  userData: PropTypes.object
};

export default TodoList;
