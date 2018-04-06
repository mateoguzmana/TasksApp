import React from "react";
import ListTodo from "../ListTodo";
import ListUsers from "../ListUsers";

const MainList = props => {
  const { userData } = props;

  return userData.admin ? <ListUsers {...props}/> : <ListTodo {...props}/>;
};

export default MainList;
