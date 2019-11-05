import React from 'react'

import { createBrowserHistory } from "history";
import Router from './Router/Router';

/**
 * get users list from json file
 */
import users from './Component/Core/Users.json';
const userList = users.userList;

/**
 * create history object 
 */
const history = createBrowserHistory();

const App = (props) => {
  
  /**
   * Check User authentication
   */
  if (!checkValidUser()) {
    history.push("/login")
  }

  return (
    <Router />
  )
}


/**
 * User authentication
 * 
 * return true/false
 */
const checkValidUser = () => {
  const token = localStorage.getItem("token");
  let valid = false;
  userList.map(user => {
    if (user.token === token) {
      valid = true
    }
    return true;
  });
  return valid
}

export default App
