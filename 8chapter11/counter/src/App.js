import React, { Component } from 'react';
import CounterBook from './CounterBook';
import CounterGA from './CounterGA';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterBook />
        <CounterGA />
      </div>
    );
  }
}

export default App;
