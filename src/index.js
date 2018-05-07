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
import { startCoffeeInterval, INTERVAL_COFFEE, CLICK_COFFEE } from './actions'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => {
    if (action.type === INTERVAL_COFFEE || action.type === CLICK_COFFEE) {
      return false
    }
    return true
  }
})

/* eslint-disable no-underscore-dangle */
const store = createStore(
  coffeeApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
)
/* eslint-enable */


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('root'));
registerServiceWorker();

store.dispatch(startCoffeeInterval())
