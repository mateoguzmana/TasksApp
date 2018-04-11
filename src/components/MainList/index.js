import React from "react";
import PropTypes from "prop-types";
import ListTodo from "../ListTodo";
import ListUsers from "../ListUsers";

const MainList = props => {
  const { userData } = props;

  const getMainScreen = mainScreen => {
    switch (mainScreen) {
      case "admin":
        return <ListUsers {...props} />;

      case "user":
        return <ListTodo {...props} />;

      default:
        return <ListTodo {...props} />;
    }
  };

  return getMainScreen(userData.mainScreen);
};

MainList.propTypes = {
  userData: PropTypes.object
};

export default MainList;
