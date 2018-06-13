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

const Sender = (props) => {
  return (
    <div className="label">
      <p className="name">{props.name}</p>
      <p className="address1">{props.address1}</p>
      <p className="address2">{props.address2}</p>
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
      <Sender name="Mr. Sender" address1="123 Fake St." address2="Boston, MA 02118" />
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