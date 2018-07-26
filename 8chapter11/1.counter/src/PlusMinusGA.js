import React, { Component } from 'react';

class PlusMinusGA extends Component {

  constructor() {
    super();
    this.state = {
      clicks: 0
    }
    this._incrementClicks = this._incrementClicks.bind(this)
    this._decrementClicks = this._decrementClicks.bind(this)
  }

  _incrementClicks() {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  _decrementClicks() {
    this.setState({
      clicks: this.state.clicks - 1
    })
  }

  render () {
    return (
      <div className="plus-minus">
        <p>Render 2 buttons; one for add other for subs GA</p>
        <button onClick={ this._incrementClicks }>+</button>
        <span> { this.state.clicks } </span>
        <button onClick={ this._decrementClicks }>-</button>
      </div>
    );
  }
}

export default PlusMinusGA;