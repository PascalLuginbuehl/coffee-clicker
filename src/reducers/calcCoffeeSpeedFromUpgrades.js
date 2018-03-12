import { availableUpgrades } from './availableUpgrades'

export function calcCoffeeSpeedFromUpgrades(upgrades) {
  let amount = 0

  upgrades.forEach(upgrade => {
    const upgradePrice = availableUpgrades.find(avUpgrade => avUpgrade.name === upgrade.name)
    if (upgradePrice) {
      amount += upgradePrice.bonus * upgrade.count
    }
  })
  // rounding to 0.01 of thing
  return Math.round(amount * 100) / 100
}
