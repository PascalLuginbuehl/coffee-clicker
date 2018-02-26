import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { coffeeApp } from './reducers'
// import { fetchTodos } from './actions'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const store = createStore(
  coffeeApp,
  applyMiddleware(
    loggerMiddleware,
  ),
)


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
