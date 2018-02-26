import { CLICK_COFFEE } from '../actions'
import { combineReducers } from 'redux'

function coffeeCounter(state = 0, action) {
  switch (action.type) {
    case CLICK_COFFEE:
      return state + 1
    default:
      return state
  }
}

export const coffeeApp = combineReducers({
  coffeeCounter,
})
