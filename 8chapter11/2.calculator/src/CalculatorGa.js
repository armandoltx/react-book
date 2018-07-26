import React, { Component } from 'react';

class CalculatorGA extends Component {

  constructor () {
    super();
    this.state = {
      number1: 0,
      number2: 0,
    }
    this._handleValues = this._handleValues.bind(this)
  }

  _handleValues(e) {
    console.log(e.target.id);
    if(e.target.id === "number1") {
      this.setState({
        number1: Number(e.target.value)
      });
    } else {
      this.setState({
        number2: Number(e.target.value)
      })
    }
  }

  render () {
    const number1 = this.state.number1
    const number2 = this.state.number2
    return(
      <div className="calculator-ga">
        <h3>Calculator GA</h3>
        <input id='number1' type="number" value={ this.state.number1 } onChange={ this._handleValues } />
        <input id='number2' type="number" value={this.state.number2} onChange={this._handleValues}/>
        <div className="results">
          <h3>Results</h3>
          <p>{number1} + {number2} = {number1 + number2} </p>
          <p>{number1} - {number2} = {number1 - number2} </p>
          <p>{number1} * {number2} = {number1 * number2} </p>
          <p>{number1} / {number2} = {number1 / number2} </p>
        </div>
      </div>
      
    );
  }
}


export default CalculatorGA;