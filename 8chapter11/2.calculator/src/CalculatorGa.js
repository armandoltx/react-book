import React, { Component } from 'react';

class CalculatorGA extends Component {

  render () {
    return(
      <div className="calculator-ga">
        <h1>Calculator</h1>
        <input id='number1' type="number" value="12121221"/>
        <input id='number2' type="number" value="12121221" />
        <div className="results">
          <h2>Results</h2>
        </div>
      </div>
      
    );
  }
}


export default CalculatorGA;