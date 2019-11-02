import React, { Component } from 'react';
import './App.css';

import Router from './Router/index'
import { createBrowserHistory as createHistory } from 'history'

class App extends Component {
  state = {
    validUser: true,
  }
  render() {
    if (!this.state.validUser) {
      const history = createHistory()
      history.push('/login');
    }
    return (
      <Router />
    );
  }
}

export default App;