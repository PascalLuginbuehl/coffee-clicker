import { CLICK_COFFEE, INTERVAL_COFFEE, BUY_UPGRADE } from '../actions'
import { combineReducers } from 'redux'

const availableUpgrades = [
  {
    name: "Zucker",
    price: 10,
    bonus: 0.1,
  }
]

const calculateCookieThing = (Upgrades) => {
  let amount = 0

  Upgrades.forEach(upgrade => {
    const upgradePrice = availableUpgrades.find(avUpgrade => avUpgrade.name == upgrade.name)
    if (upgradePrice) {
      upgradePrice.bonus * upgrade.count
    }
  })

  return amount
}

const defaultState = { coffeeCounter: 0, coffeeMultiplier: 2, Upgrades: [], availableUpgrades: availableUpgrades}
function coffeeShop(state = defaultState, action) {

  switch (action.type) {
    case BUY_UPGRADE:
      const upgrade = availableUpgrades.find(upgrade => upgrade.name === action.upgradeName)
      if (upgrade) {
        const newArray = [...state.Upgrades]
        const foundCurrentUpgrade = newArray.find(name => name.name === action.upgradeName)

        if (foundCurrentUpgrade) {
          foundCurrentUpgrade.count += 1
        } else {
          newArray.push({name: action.upgradeName, count: 1})
        }
        return Object.assign({}, state, {
          Upgrades: newArray
        })
      } else {
        return state
      }
    case CLICK_COFFEE:
      return Object.assign({}, state, { coffeeCounter: state.coffeeCounter + 1 + calculateCookieThing(state.Upgrades)})
    case INTERVAL_COFFEE:
      return Object.assign({}, state, { coffeeCounter: state.coffeeCounter + 1 + calculateCookieThing(state.Upgrades)})
    default:
      return state
  }
}

export const coffeeApp = combineReducers({
  coffeeShop,
})
