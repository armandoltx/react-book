import React, { Component } from 'react';

class PlusMinusEs7 extends Component {

  state = {
    clicks: 0
  }

  _handleCountClick = (e) => {
    if(e.target.id === "add") {
      this.setState( {
        clicks: this.state.clicks + 1
      } )
    } else if(e.target.id === "subtract") {
      this.setState( {
        clicks: this.state.clicks -1
      } )
    } else {
      this.setState( {
        clicks: 0
      } )
    }
  }


  render() {
    return (
      <div className="plus-minus">
        <p>Render 2 buttons; one for add other for subs ES7</p>
        <button id="add" onClick={this._handleCountClick}>+</button>
        <span> {this.state.clicks} </span>
        <button id="subtract" onClick={this._handleCountClick}>-</button>
        <button id="reset" onClick={this._handleCountClick}>reset</button>
      </div>
    );
  }
}


export default PlusMinusEs7;