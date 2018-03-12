import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { clickCoffee, buyUpgrade } from './actions'
import { calcCoffeeSpeedFromUpgrades } from './reducers/calcCoffeeSpeedFromUpgrades'


class App extends Component {
  render() {
    return (
      <div className="App">
       <main>
        <div class="main">
          <div>
            <h2>Counter</h2>
            <p>{Math.floor(this.props.coffeeCounter)}</p>
              <p>U will get {calcCoffeeSpeedFromUpgrades(this.props.Upgrades)}/sec</p>
          </div>

          <div onClick={this.props.onCoffeeClick}>
            <img class="coffee-container" src="click-this-coffee.png" alt="Click This!"/>
          </div>
          </div>
          <div class="aside">
            <div class="upgrade-container">
              {this.props.availableUpgrades.map(upgrade => (
                <div onClick={() => this.props.onBuyCoffee(upgrade.name)} key={upgrade.name} className={upgrade.price > this.props.coffeeCounter ? "upgrade-item not-buyable" : "upgrade-item" }>
                  <div class="left">
                    <h3>{upgrade.name}</h3>
                    <p>+{upgrade.bonus} pro Sekunde</p>
                  </div>
                  <div class="right">
                    <h3>{this.props.Upgrades.find(e => e.name === upgrade.name) ? this.props.Upgrades.find(e => e.name === upgrade.name).count : 0}x</h3>
                    <p>Preis: {upgrade.price}.-</p>
                  </div>
                </div>
              ))}
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
