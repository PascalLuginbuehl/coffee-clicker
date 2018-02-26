import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { clickCoffee } from './actions'


class App extends Component {
  constructor() {
    super()
    console.log(this)
  }

  render() {
    console.log(this)

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
    coffeeCounter: state.coffeeCounter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCoffeeClick: () => {
      dispatch(clickCoffee())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
