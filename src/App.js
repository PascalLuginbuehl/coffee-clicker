import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { clickCoffee, intervalCoffee, buyUpgrade } from './actions'


class App extends Component {
  constructor (){
    super()
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>Counter</h2>
          <p>{Math.floor(this.props.coffeeCounter)}</p>
        </div>

        <div onClick={this.props.onCoffeeClick}>
          CoffePicture
        </div>

        <div>
          <h2>buy shit</h2>
          {this.props.availableUpgrades.map(upgrade => (<div onClick={() => this.props.onBuyCoffee(upgrade.name)} key={upgrade.name}>
            <h3>{upgrade.name}</h3>
            <p>Price {upgrade.price}</p>
            <p>I has {this.props.Upgrades.find(e => e.name === upgrade.name) ? this.props.Upgrades.find(e => e.name === upgrade.name).count : 0}</p>
          </div>))}
        </div>
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
      console.log("HI")
      dispatch(clickCoffee())
    },
    onBuyCoffee: (upgradeName) => {
      dispatch(buyUpgrade(upgradeName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
