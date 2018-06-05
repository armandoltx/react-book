import React, { Component } from 'react';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex4 from './Ex4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ex1 />
        <hr/>
        <Ex2 />
        <hr />
        <Ex4 name="Armando" />
        <Ex4 name="Lucia" />
        <Ex4 />
      </div>
    );
  }
}

export default App;
