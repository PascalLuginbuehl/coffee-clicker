import { CLICK_COFFEE, INTERVAL_COFFEE } from '../actions'
import { combineReducers } from 'redux'

const defaultState = { coffeeCounter: 0, coffeeMultiplier: 2, Upgrades: []}
function coffeeShop(state = defaultState, action) {

  switch (action.type) {
    case CLICK_COFFEE:
      return Object.assign({}, state, { coffeeCounter: state.coffeeCounter + 1})
    case INTERVAL_COFFEE:
      return Object.assign({}, state, { coffeeCounter: state.coffeeCounter + 1 * state.coffeeMultiplier })
    default:
      return state
  }
}

export const coffeeApp = combineReducers({
  coffeeShop,
})
