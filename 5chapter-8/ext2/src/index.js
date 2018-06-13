import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';


const Stamp = () => {
  <div className="stamp">
    STAMP
  </div>
}

const Sender = ({ fromPerson}) => {
  var { name, address1, address2 } = fromPerson;
  return (
    <div className="label">
      <p className="name">{name}</p>
      <p className="address1">{address1}</p>
      <p className="address2">{address2}</p>
    </div>
  );
}

function Envelope({ fromPerson}) {
  return(
    <div className="envelop">
      <Sender fromPerson={returnLabel} />
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
  <Envelope toPerson={recipientLabel} fromPerson={returnLabel} />,
  document.getElementById('root')
);