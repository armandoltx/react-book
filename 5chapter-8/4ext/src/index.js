import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';

function Poster() {
  render(
    <div>
      <p>Image</p>
      <h1>REACT</h1>
      <h3>The best thing since JQuery, probably.</h3>
    </div>

  );
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
