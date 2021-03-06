export const CLICK_COFFEE = "CLICK_COFFEE"
export function clickCoffee() {
return {
    type: CLICK_COFFEE,
  }
}


export const INTERVAL_COFFEE = "INTERVAL_COFFEE"
export function intervalCoffee() {
return {
    type: INTERVAL_COFFEE,
  }
}

export const BUY_UPGRADE = "BUY_UPGRADE"
export function buyUpgrade(upgradeName) {
  return {
    type: BUY_UPGRADE,
    upgradeName,
  }
}

export function startCoffeeInterval() {
  return (dispatch) => {
    setInterval(() => {
      dispatch(intervalCoffee())
    }, 10)
  }
}
