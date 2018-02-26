import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { clickCoffee, intervalCoffee } from './actions'


class App extends Component {
  constructor (){
    super()
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>Counter</h2>
          <p>{this.props.coffeeCounter}</p>
        </div>

        <div onClick={this.props.onCoffeeClick}>
          CoffePicture
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    coffeeCounter: state.coffeeShop.coffeeCounter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCoffeeClick: () => {
      dispatch(clickCoffee())
    },
    onCoffeeInterval: () => {
      dispatch(intervalCoffee())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
