import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { clickCoffee, buyUpgrade } from './actions'
import { calcCoffeeSpeedFromUpgrades } from './reducers/calcCoffeeSpeedFromUpgrades'


class App extends Component {
  constructor() {
    super()


    this.state = {
      showInWindow: 4,
      scrollPage: 1,
    }
  }

  scrollDown() {
    if (this.props.availableUpgrades.length > this.state.scrollPage * this.state.showInWindow) {
      this.setState({scrollPage: this.state.scrollPage + 1})
    }
  }

  scrollUp() {
    console.log(this.state.scrollPage)
    if (1 < this.state.scrollPage) {
      this.setState({ scrollPage: this.state.scrollPage - 1 })
    }
  }

  render() {
    const state = this.state
    const props = this.props

    return (
      <div className="App">
       <main>
        <div className="main">
          <div>
            <h2>Counter</h2>
            <p>{Math.floor(props.coffeeCounter)}</p>
              <p>U will get {calcCoffeeSpeedFromUpgrades(props.Upgrades)}/sec</p>
          </div>

          <div onClick={props.onCoffeeClick}>
            <img className="coffee-container" src="click-this-coffee.png" alt="Click This!"/>
          </div>
          </div>
          <div className="aside">
            <div className="upgrade-container">
              <div onClick={this.scrollUp.bind(this)}>Öp</div>
              {props.availableUpgrades.filter((e, i) => i < state.scrollPage * state.showInWindow && i >= (state.scrollPage - 1) * state.showInWindow).map(upgrade => (
                <div onClick={() => props.onBuyCoffee(upgrade.name)} key={upgrade.name} className={upgrade.price > props.coffeeCounter ? "upgrade-item not-buyable" : "upgrade-item" }>
                  <div className="left">
                    <h3>{upgrade.name}</h3>
                    <p>+{upgrade.bonus} pro Sekunde</p>
                  </div>
                  <div className="right">
                    <h3>{props.Upgrades.find(e => e.name === upgrade.name) ? props.Upgrades.find(e => e.name === upgrade.name).count : 0}x</h3>
                    <p>Preis: {upgrade.price}.-</p>
                  </div>
                </div>
              ))}
              <div onClick={this.scrollDown.bind(this)}>döwn</div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coffeeCounter: state.coffeeShop.coffeeCounter,
    availableUpgrades: state.coffeeShop.availableUpgrades,
    Upgrades: state.coffeeShop.Upgrades,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCoffeeClick: () => {
      dispatch(clickCoffee())
    },
    onBuyCoffee: (upgradeName) => {
      dispatch(buyUpgrade(upgradeName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
