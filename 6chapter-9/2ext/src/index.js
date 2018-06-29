import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const FirstChildrenOnly = ({children}) => {
  return (
    <div className="first">
      <p>{children.split(" ").slice(0, 1)}</p>
    </div>
  );
}

const LastChildrenOnly = ({ children }) => {
  return (
    <div className="first">
      <p>{children.split(",").slice(1, children.length -1)}</p>
    </div>
  );
}

const Tail = ({number, children}) => {
  return (
    <div className="number">
      {number}
      {children}
    </div>
  );
}

function Children () {
  return (
    <div className="children">
      <FirstChildrenOnly>First Child Only</FirstChildrenOnly>
      <LastChildrenOnly>3, 7</LastChildrenOnly>
      <Tail number={12345}>This is a children.</Tail>
    </div>
  );
}

ReactDOM.render(<Children />, document.getElementById('root'));
registerServiceWorker();
