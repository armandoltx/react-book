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
    this._handleResult = this._handleResult.bind(this)
  }

  _handleInputValue(e) {
    if(e.target.id === "num1") {
      console.log("value ", e.target.value);
      this.setState({
        number1: Number(e.target.value)
      })
    } else {
      console.log("value ", e.target.value);
      this.setState({
        number2: Number(e.target.value)
      });
    }
  }

  _handleResult (e) {
    console.log(e.target.id)
    if (e.target.id === "add") {
      this.setState({
        result: this.state.number1 + this.state.number2
      });
    } else if(e.target.id === "subtract") {
      this.setState({
        result: this.state.number1 - this.state.number2
      });
    } else if (e.target.id === "multiply") {
      this.setState({
        result: this.state.number1 * this.state.number2
      });
    } else {
      this.setState({
          result: this.state.number1 / this.state.number2
      });
    }
  }

  


  render () {
    const result = this.state.result
    return (
      <div className="calculator-cj">
        <h3>Calculator CJ</h3>
        <input id="num1" type="number" value={ this.state.number1 } onChange={ this._handleInputValue }/>
        <button id="add" onClick={this._handleResult}>+</button>
        <button id="subtract" onClick={this._handleResult}>-</button>
        <button id="multiply" onClick={this._handleResult}>x</button>
        <button id="division" onClick={this._handleResult}>/</button>
        <input id="num2" type="number" value={ this.state.number2 } onChange={ this._handleInputValue } />
        <span>Result = {this.state.result}</span>
      </div>
    )
  }
}

export default CalculatorCJ;