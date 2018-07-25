import React, { Component } from 'react';

class Parent extends Component {
  // Don't need to write this as an arrow function
  // because it does not use "this". You're free to
  // use the arrow syntax if you prefer, though.
  handleAction(action) {
    console.log('Child says', action);
  }

  render() {
    return (
      <Child onAction={this.handleAction} />
    );
  }
}

class Child extends React.Component {
  // Written as an arrow function becuase it uses "this"
  alertParent = () => {
    this.props.onAction('button was clicked');
  }

  render() {
    return (
      <button onClick={this.alertParent}>Click Me</button>
    );
  }
}


export default Parent;