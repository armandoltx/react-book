import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';


const Stamp = () => {
  return(
    <div className="stamp">
      STAMP
    </div>
  );
}

const Sender = () => {
  return (
    <div className="label">
      <p className="name">Mr. Sender</p>
      <p className="address1">123 Fake St.</p>
      <p className="address2">Boston, MA 02118</p>
    </div>
  );
}

const Receiver = () => {
  return (
    <div className="label">
      <p className="name">Mrs. Receiver</p>
      <p className="address1">123 Fake St.</p>
      <p className="address2">San Francisco, Ca 94101</p>
    </div>
  );
}

const Envelope = () => {
  return(
    <div className="envelop">
      <Sender />
      <Receiver />
      <Stamp />
    </div>
  );
}

const returnLabel = {
  name: "Mr. Sender",
  address1: "123 Fake St.",
  address2: "Boston, MA 02118"
}

const recipietnLabel = {
  name: "Mrs. Receiver",
  address1: "123 Fake St.",
  address2: "San Francisco, CA 94101"
}


ReactDOM.render(
  <Envelope />,
  document.getElementById('root')
);