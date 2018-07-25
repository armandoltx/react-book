import React, { Component } from 'react';


class CounterGAes7 extends Component {
  
    state = {
      clicks: 0
    };

  _incrementClicks = () => {
    console.log("Clicked");
    
    this.setState( {
      clicks: this.state.clicks +1
    } )
  }

  render () {
    return (
      <div className="counter-ga">
        render a button where you click count them using ES7 (increment the numbers)
        <button onClick={ this._incrementClicks }> { this.state.clicks } Clicks so far</button>
      </div>
    );
  }
}

export default CounterGAes7;