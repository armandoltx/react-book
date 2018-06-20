import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';

function CreditCard({cardInfo}){
  console.log("card => ", cardInfo);
  const {bankName, cardNumbers, csv, expirationDate, userName} = cardInfo;
  return(
    <div className="credit-card">
      <h1 className="bank-name">{bankName}</h1>
      <p className="numbers">{cardNumbers}</p>
      <small className="csv">{csv}</small>
      <p className="date">{expirationDate}</p>
      <h3 className="user">{userName}</h3>
    </div>
  );
}

CreditCard.propTypes = {
  cardInfo: PropTypes.shape({
    bankName: PropTypes.string.isRequired,
    cardNumbers: PropTypes.string.isRequired,
    csv: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired
  }).isRequired
}

const info = {
  bankName: "Big Bank, Inc.",
  cardNumbers: "1234 5678 8765 4321",
  csv: "1234",
  expirationDate: "08/19",
  userName: "CARDHOLDER NAME"
}


ReactDOM.render(<CreditCard cardInfo={info} />, document.getElementById('root'));
registerServiceWorker();


