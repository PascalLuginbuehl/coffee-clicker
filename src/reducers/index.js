import { CLICK_COFFEE, INTERVAL_COFFEE, BUY_UPGRADE } from '../actions'
import { combineReducers } from 'redux'
import { calcCoffeeSpeedFromUpgrades } from './calcCoffeeSpeedFromUpgrades'
import { availableUpgrades } from './availableUpgrades'


const defaultState = { coffeeCounter: 0, coffeeMultiplier: 2, Upgrades: [], availableUpgrades: availableUpgrades}
function coffeeShop(state = defaultState, action) {

  switch (action.type) {
    case BUY_UPGRADE:
      let newUpgrades = JSON.parse(JSON.stringify(state.availableUpgrades))
      const upgrade = newUpgrades.find(upgrade => upgrade.name === action.upgradeName)
      // Look for upgrade / upgrade exists
      if (upgrade) {
        if (!upgrade.unlocked && upgrade.price * 2 <= state.coffeeCounter) {
          upgrade.unlocked = true
          return Object.assign({}, state, {
            availableUpgrades: newUpgrades,
            coffeeCounter: state.coffeeCounter - upgrade.price * 2,
          })
        } else if (upgrade.unlocked && upgrade.price <= state.coffeeCounter) {
          // Cloning array for consistency
          const newArray = [...state.Upgrades]
          const foundCurrentUpgrade = newArray.find(name => name.name === action.upgradeName)
          upgrade.price = Math.round(1.1 * upgrade.price * 10) / 10
          if (foundCurrentUpgrade) {
            foundCurrentUpgrade.count += 1
          } else {
            newArray.push({ name: action.upgradeName, count: 1 })
          }
          return Object.assign({}, state, {
            availableUpgrades: newUpgrades,
            coffeeCounter: state.coffeeCounter - upgrade.price,
            Upgrades: newArray,
          })
        }
      }
      return state
    case CLICK_COFFEE:
      return Object.assign({}, state, { coffeeCounter: state.coffeeCounter + 1})
    case INTERVAL_COFFEE:
      return Object.assign({}, state, { coffeeCounter: state.coffeeCounter + calcCoffeeSpeedFromUpgrades(state.Upgrades) / 100})
    default:
      return state
  }
}

export const coffeeApp = combineReducers({
  coffeeShop,
})
