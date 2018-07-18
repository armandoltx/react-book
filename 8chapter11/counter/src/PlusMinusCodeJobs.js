import React, { Component } from 'react';

class PlusMinusCodeJobs extends Component {

  constructor() {
    super();
    this.state = {
      clicks: 0
    }
    this._handleCountClick = this._handleCountClick.bind(this)
  }

  _handleCountClick(e) {
    console.log(e.target.id);
    if(e.target.id === "add") {
      this.setState({
        clicks: this.state.clicks + 1
      })
    } else if(e.target.id === "subtract") {
      this.setState({
        clicks: this.state.clicks - 1
      })
    } else {
      this.setState({
        clicks: 0
      })
    }

    
  }

  _decrementClicks() {
    this.setState({
      clicks: this.state.clicks - 1
    })
  }

  render () {
    return (
      <div className="plus-minus">
        <p>Render 2 buttons; one for add other for subs CodeJobs</p>
        <button id="add" onClick={ this._handleCountClick }>+</button>
        <span> { this.state.clicks } </span>
        <button id="subtract" onClick={ this._handleCountClick }>-</button>
        <button id="reset" onClick= { this._handleCountClick }>reset</button>
      </div>
    );
  }
}

export default PlusMinusCodeJobs;