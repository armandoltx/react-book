import React, { Component } from 'react';
import './App.css';
import CalculatorGa from './CalculatorGa';
import CalculatorCJ from './CalculatorCJ';



class App extends Component {
  render() {
    return (
      <div className="App">
        <CalculatorGa />
        <CalculatorCJ />
      </div>
    );
  }
}

export default App;
