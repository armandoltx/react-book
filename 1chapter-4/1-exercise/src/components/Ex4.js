import React, { PureComponent } from 'react';

class ex4 extends PureComponent {
  render() {
    return(
      <h1 className="greeting">
        Hello {this.props.name || "username"}
      </h1>
    );
  }
}

export default ex4;