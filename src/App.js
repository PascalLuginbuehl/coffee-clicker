import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import { fetchTodos } from './actions'
import { todoApp } from './reducers'


import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const store = createStore(
  todoApp,
  applyMiddleware(
    loggerMiddleware,
  ),
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
