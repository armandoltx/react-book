import React, { Component } from 'react';


class CounterGA extends Component {
  
  constructor() {
    super();
    console.log('constructor is working');
    this.state = {
      clicks: 0
    };
    this._incrementClicks = this._incrementClicks.bind(this)
    console.log("this.state.clicks=> ", this.state.clicks);
  }

  _incrementClicks() {
    console.log("Clicked");
    console.log("this=> ", this);
    this.setState( {
      clicks: this.state.clicks +1
    } )
  }

  render () {
    return (
      <div className="counter-ga">
        render a button where you click count them GA code (increment the numbers)
        <button onClick={ this._incrementClicks }> { this.state.clicks } Clicks so far</button>
      </div>
    );
  }
}

export default CounterGA;