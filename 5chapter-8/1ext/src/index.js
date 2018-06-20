import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';


function AddressLabel({ mail }) {
  var {name, address1, address2} = mail;
  return (
    <div className= "label">
      <p className="name">
        {name}
      </p>
      <p className="address1">
        {address1}
      </p>
      <p className="address">
        {address2}
      </p>
    </div>

  );
}

AddressLabel.propTypes = {
  mail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string.isRequired
  }).isRequired
}

const contactDetail = {
  name: "Full Name",
  address1: "123 Fake St.",
  address2: "Boston, MA 02118"
}

ReactDOM.render(
  <AddressLabel mail= {contactDetail} />, document.getElementById('root')
  );
