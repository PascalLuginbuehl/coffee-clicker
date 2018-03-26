import React, { Component } from 'react'

class BubbleClick extends Component {
  constructor(props) {
    super()

    this.props = props

    const interval = setInterval(() => {
      const state = this.state
      this.setState({
        x: state.x + (Math.sin(state.y / 500) * state.multiplier) * state.left,
        y: state.y - 10,
        opacity: state.opacity - 0.05,
      })

      if(state.opacity <= 0) {
        clearInterval(state.interval)
        this.props.removeItem()
      }
    }, 950 / 10)

    this.state = {
      x: this.props.initPosition.x,
      y: this.props.initPosition.y,
      left: Math.round(Math.random()) * 2 - 1,
      multiplier: Math.round(Math.random() * 10),
      opacity: 1,
      interval,
    }
  }


  render() {
    const state = this.state
    const props = this.props

    return (
      <div className="bubbles" style={{ transform: "translate(" + state.x + "px, " + state.y + "px)", opacity: state.opacity}}>
        +1
      </div>
    )
  }
}

export default BubbleClick
