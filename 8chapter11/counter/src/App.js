import React, { Component } from 'react';
import CounterBook from './CounterBook';
import CounterGA from './CounterGA';
import CounterGAes7 from './CounterGAes7';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterBook />
        <CounterGA />
        <CounterGAes7 />
      </div>
    );
  }
}

export default App;
