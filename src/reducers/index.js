import { CLICK_COFFEE, INTERVAL_COFFEE, BUY_UPGRADE } from '../actions'
import { combineReducers } from 'redux'

const availableUpgrades = [
  {
    name: "Zucker",
    price: 10,
    bonus: 0.1,
  },
  {
    name: "Not dicks",
    price: 100,
    bonus: 1,
  }
]

const calculateCookieThing = (Upgrades) => {
  let amount = 0

  Upgrades.forEach(upgrade => {
    const upgradePrice = availableUpgrades.find(avUpgrade => avUpgrade.name === upgrade.name)
    if (upgradePrice) {
      amount += upgradePrice.bonus * upgrade.count
    }
  })

  return Math.round(amount * 100) / 100
}

const defaultState = { coffeeCounter: 0, coffeeMultiplier: 2, Upgrades: [], availableUpgrades: availableUpgrades}
function coffeeShop(state = defaultState, action) {

  switch (action.type) {
    case BUY_UPGRADE:
      const upgrade = availableUpgrades.find(upgrade => upgrade.name === action.upgradeName)
      // Look for upgrade / upgrade exists
      if (upgrade) {
        if (upgrade.price < state.coffeeCounter) {
          // Cloning array for consistency
          const newArray = [...state.Upgrades]
          const foundCurrentUpgrade = newArray.find(name => name.name === action.upgradeName)

          if (foundCurrentUpgrade) {
            foundCurrentUpgrade.count += 1
          } else {
            newArray.push({ name: action.upgradeName, count: 1 })
          }
          return Object.assign({}, state, {
            coffeeCounter: state.coffeeCounter - upgrade.price,
            Upgrades: newArray,
          })
        }
      }
      return state
    case CLICK_COFFEE:
      return Object.assign({}, state, { coffeeCounter: state.coffeeCounter + 1 + calculateCookieThing(state.Upgrades)})
    case INTERVAL_COFFEE:
      return Object.assign({}, state, { coffeeCounter: state.coffeeCounter + calculateCookieThing(state.Upgrades) / 100})
    default:
      return state
  }
}

export const coffeeApp = combineReducers({
  coffeeShop,
})
