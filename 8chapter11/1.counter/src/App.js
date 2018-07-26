import React, { Component } from 'react';
import CounterBook from './CounterBook';
import CounterGA from './CounterGA';
import CounterGAes7 from './CounterGAes7';
import PlusMinusGA from './PlusMinusGA';
import PlusMinusCodeJobs from './PlusMinusCodeJobs';
import PlusMinusEs7 from './PlusMinusEs7';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterBook />
        <CounterGA />
        <CounterGAes7 />
        <PlusMinusGA />
        <PlusMinusCodeJobs />
        <PlusMinusEs7 />
        <CalculatorCJ />
      </div>
    );
  }
}

export default App;
