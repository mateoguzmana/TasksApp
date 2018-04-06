import React from "react";
import PropTypes from "prop-types";
import ListTodo from "../ListTodo";
import ListUsers from "../ListUsers";

const MainList = props => {
  const { userData } = props;

  return userData.admin ? <ListUsers {...props}/> : <ListTodo {...props}/>;
};

MainList.propTypes = {
  userData: PropTypes.object
};

export default MainList;
