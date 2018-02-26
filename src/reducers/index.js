import { CLICK_COFFEE, INTERVAL_COFFEE } from '../actions'
import { combineReducers } from 'redux'

function coffeeCounter(state = 0, action) {
  switch (action.type) {
    case CLICK_COFFEE:
      return state + 1
    case INTERVAL_COFFEE:
      return state + 1
    default:
      return state
  }
}

export const coffeeApp = combineReducers({
  coffeeCounter,
})
