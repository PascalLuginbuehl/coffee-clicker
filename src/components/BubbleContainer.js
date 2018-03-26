import React, { Component } from 'react'
import BubbleClick from './BubbleClick'
import './bubbles.css'


class BubbleContainer extends Component {
  constructor(props) {
    super()

    this.props = props
    this.state = {
      bubbles: []
    }

    this.onClick = this.onClick.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  onClick(event) {

    this.setState({ bubbles: [...this.state.bubbles, {
      x: event.clientX - this.myParent.offsetLeft - 25,
      y: event.clientY - this.myParent.offsetTop - 25,
    }]})
  }

  removeItem(index) {
    this.setState({bubbles: this.state.bubbles.filter((e, i) => index !== i)})
  }

  render() {
    return (
      <div onClick={this.onClick} className="bubble-container" ref={parent => { this.myParent = parent }}>
        {this.props.children}
        {this.state.bubbles.map((e, i) => <BubbleClick key={i} initPosition={e} removeItem={e => this.removeItem(i)} />)}
      </div>
    )
  }
}

export default BubbleContainer
