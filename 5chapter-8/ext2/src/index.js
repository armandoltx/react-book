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
    <div className="to-label">
      <p className="name">{props.name}</p>
      <p className="address1">{props.address1}</p>
      <p className="address2">{props.address2}</p>
    </div>
  );
}

const Receiver = ({name, address1, address2}) => {
  return (
    <div className="from-label">
      <p className="name">{name}</p>
      <p className="address1">{address1}</p>
      <p className="address2">{address2}</p>
    </div>
  );
}

const Envelope = () => {
  return(
    <div className="envelope">
      <Sender name="Mr. Sender" address1="123 Fake St." address2="Boston, MA 02118" />
      <Receiver name="Mrs. Receiver" address1="123 Fake St." address2={"San Francisco, Ca 94101"}/>
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