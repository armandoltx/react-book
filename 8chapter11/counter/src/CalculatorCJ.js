import React, { Component } from 'react';

class CalculatorCJ extends Component {

  constructor () {
    super();
    this.state = {
      number1: 1,
      number2: 2,
      result: 0
    }
    this._handleInputValue = this._handleInputValue.bind(this)
  }

  _handleInputValue(e) {
    if(e.target.id === "num1") {
      console.log("value ", e.target.value);
      this.setState({
        number1: e.target.value
      })
    } else {
      console.log("value ", e.target.value);
      this.setState({
        number2: e.target.value
      });
    }
  }

  _handleResult () {
    this.setState({
      result: this.state.number1 + this.state.number2
    });
  }


  render () {
    return (
      <div className="calculator-cj">
        <input id="num1" type="number" value={ this.state.number1 } onChange={ this._handleInputValue }/>
        <button>+</button>
        <input id="num2" type="number" value={ this.state.number2 } onChange={ this._handleInputValue } />
        <button onClick={this._handleResult}>Result = </button>{this.result}
      </div>
    )
  }
}

export default CalculatorCJ;