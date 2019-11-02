import React, { Component } from 'react';
import './App.css';

import Router from './Router/index'
import { createBrowserHistory as createHistory } from 'history'

// users
import users from './Component/Core/Users.json';
const userList = users.userList;

class App extends Component {
  state = {
    validUser: true,
  }

  static checkValidUser = () => {
    console.log("Check User");
    const token = localStorage.getItem("token");
    let valid = false;
    userList.map(user => {
      if (user.token === token) {
        valid = true
      }
      return true;
    });
    return { validUser: valid }
  }

  static getDerivedStateFromProps(props, state) {
    return App.checkValidUser();
  }
  render() {
    const history = createHistory();
    if (!this.state.validUser) {
      history.push('/login');
    }
    return (
      <Router history={history} />
    );
  }
}

export default App;